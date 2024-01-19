function sigmoid(x){
    return 1 / (1 + Math.exp(-x));
}

function dsigmoid(x){
    return x * (1 - x);
}

class RedeNeural{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.bias_ih = new Matrix(this.h_nodes, 1);
        this.bias_ih.randomize();
        this.bias_ho = new Matrix(this.o_nodes, 1);
        this.bias_ho.randomize();

        this.weigths_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.weigths_ih.randomize();
        this.weigths_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.weigths_ho.randomize();

        this.learning_rate = 0.1;
    }

    train(arr, target){
        // Pegando os inputs e gerando os valores ocultos
        let input = Matrix.arrayToMatrix(arr);
        let hidden = Matrix.multiply(this.weigths_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);
        hidden.map(sigmoid);
        
        // Pegando os valores ocultos e gerando os outputs

        let output = Matrix.multiply(this.weigths_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);

        // Corrigindo os erros (backpropagation)
        // Correção da camada de saída -> camada oculta
        let expected = Matrix.arrayToMatrix(target);
        let output_error = Matrix.sub(expected, output);
        
        // d_output = dereivação do output
        let d_output = Matrix.map(output, dsigmoid);
        let hidden_T = Matrix.transpose(hidden);
        
        let gradient_O = Matrix.hadamard(output_error, d_output);
        gradient_O = Matrix.escalar_mult(gradient_O, this.learning_rate);

        // Ajuste dos bias do Saída -> Oculta
        this.bias_ho = Matrix.add(this.bias_ho, gradient_O);

        let weigths_ho_delta = Matrix.multiply(gradient_O, hidden_T);
        this.weigths_ho = Matrix.add(this.weigths_ho, weigths_ho_delta);

        // Correção da camada oculta -> camada de entrada

        let weigths_ho_T = Matrix.transpose(this.weigths_ho);
        let hidden_error = Matrix.multiply(weigths_ho_T, output_error);
        let d_hidden = Matrix.map(hidden, dsigmoid);
        let input_T = Matrix.transpose(input);

        let gradient_H = Matrix.hadamard(hidden_error, d_hidden);
        gradient_H = Matrix.escalar_mult(gradient_H, this.learning_rate);

        // Ajuste dos bias da Oculta -> Entrada
        this.bias_ih = Matrix.add(this.bias_ih, gradient_H);

        let weigths_ih_delta = Matrix.multiply(gradient_H, input_T);
        this.weigths_ih = Matrix.add(this.weigths_ih, weigths_ih_delta);
    }

    predict(arr){
        let input = Matrix.arrayToMatrix(arr);
        let hidden = Matrix.multiply(this.weigths_ih, input);
        hidden = Matrix.add(hidden, this.bias_ih);
        hidden.map(sigmoid);
        
        // Pegando os valores ocultos e gerando os outputs

        let output = Matrix.multiply(this.weigths_ho, hidden);
        output = Matrix.add(output, this.bias_ho);
        output.map(sigmoid);

        output = Matrix.matrixToArray(output);
        return output;
    }
}