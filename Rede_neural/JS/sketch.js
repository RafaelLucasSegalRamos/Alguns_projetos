var train = true;
var nn = new RedeNeural(2,3,1);
var epocas = 0

function setup(){

    
    
    dataset = {
        inputs:
            [
            [0, 1, 0], //Porquinhos
            [0, 1, 1],
            [1, 1, 0],

            [0, 1, 1], //Cachorros
            [1, 0, 1],
            [1, 1, 1]
            ],
        outputs:
            [
            [1],
            [1],
            [1], //Porquinhos

            [0],
            [0],
            [0] //Cachorros
        ]
    }


}
function draw() {
    if (train) {
        
        for (var i = 0; i < 100000; i++) {
            var index = floor(random(4));
            nn.train(dataset.inputs[index], dataset.outputs[index]);
        }
        epocas++;

        if ((nn.predict([0, 1, 0])[0] < 0.48 && nn.predict([1, 0, 1])[0] > 0.98)) {
            train = false;
            console.log("terminou");
            console.log("Demorou: ",epocas, "epocas");
        }
    }
}