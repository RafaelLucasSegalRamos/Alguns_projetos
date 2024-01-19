class Matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;

        this.data = [];
        for (let i = 0; i < rows; i++){
            let arr = [];
            for (let j=0; j<cols; j++){
                arr.push(0);
            }
            this.data.push(arr);
        }
    }

    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) => {
            return arr[i];
        })
        return matrix;
    }

    static matrixToArray(matrix) {
        let arr = [];
        matrix.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }

    print(){
        console.table(this.data);
    }

    static map(A, func){
        let matrix = new Matrix(A.rows, A.cols);
        matrix.data = A.data.map((arr, i)=> {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })
        return matrix;
    }

    map(func){
        this.data = this.data.map((arr, i)=> {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })
        return this;
    }

    static transpose(A){
        let matrix = new Matrix(A.cols, A.rows);
        matrix.map((num, i, j) => {
            return A.data[j][i];
        })
        return matrix;
    }

    static add(A, B){
        var matrixA = new Matrix(A.rows, A.cols);

        matrixA.map((num, i, j) => {
            return A.data[i][j] + B.data[i][j];
        })

        return matrixA;
    }

    static sub(A, B){
        var matrixA = new Matrix(A.rows, A.cols);

        matrixA.map((num, i, j) => {
            return A.data[i][j] - B.data[i][j];
        })

        return matrixA;
    }

    static hadamard(A, B){
        var matrixA = new Matrix(A.rows, A.cols);

        matrixA.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j];
        })

        return matrixA;
    }

    static escalar_mult(A, escalar){
        var matrixA = new Matrix(A.rows, A.cols);

        matrixA.map((num, i, j) => {
            return A.data[i][j] * escalar;
        })

        return matrixA;
    }

    static multiply(A, B){
        
        var matrixA = new Matrix(A.rows, B.cols);
        

        matrixA.map((num, i, j) => {
            let sum = 0
            for (let k=0; k<A.cols; k++){
                let el1 = A.data[i][k];
                let el2 = B.data[k][j];
                sum += el1*el2;

            }
            return sum;
        })
        return matrixA;
    }

    randomize(){
        this.map((elm, i, j) => {
            return Math.random()*2 - 1
        })
    }
}