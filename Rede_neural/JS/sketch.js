function setup(){
    createCanvas(500,500);
    background(0);

    var nn = new RedeNeural(1,3,1);
    var arr = [1, 2];

    nn.feedfoward(arr);
}

function draw(){


}