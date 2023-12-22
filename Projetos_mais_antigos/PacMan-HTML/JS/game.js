const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const pacFrames = document.getElementById('animation');
const ghostsFrames = document.getElementById('ghosts');

let craeteRect = (x, y, width, height, color) => {

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}
let fps = 30
let oneBlockSize = 20
let wallSpaceWidth = oneBlockSize / 1.5
let wallOffSet = (oneBlockSize - wallSpaceWidth) /2
let wallInnerColor = 'black'
var score = 0
let ghosts = []

const DIRECTION_RIGHT = 4
const DIRECTION_LEFT = 2
const DIRECTION_UP = 3
const DIRECTION_BOTTOM = 1

let ghostLocation = [
    {x: 0,y: 0},
    {x: 176,y: 0},
    {x: 0,y: 121},
    {x: 176,y: 121}
]

let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], // 1
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1], // 2
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1], // 3
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], // 4
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1], // 5
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1], // 6
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1], // 7
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0], // 8
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1], // 9
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1], // 10
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1], // 11
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0], // 12
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0], // 13
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1], // 14
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], // 15
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1], // 16
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1], // 17
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1], // 18
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1], // 19
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1], // 20
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1], // 21
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 22
    
];

let gameLoop = () => {
    update()
    draw()
}

let update = () => {
    pacman.moveProcess()
    pacman.eat()
}

let drawFoods = () => {
    for (let i = 0; i < map.length; i++) {
        for(let j = 0; j<map[0].length; j++) {
            if(map[i][j] == 2) {
                craeteRect(
                    j * oneBlockSize + oneBlockSize / 2,
                    i * oneBlockSize + oneBlockSize / 2,
                    oneBlockSize / 5,
                    oneBlockSize / 5,
                    'cyan'
                )
            }
        }
    }
}

let drawScore = () => {
    ctx.font = '20px SilkScreen'
    ctx.fillStyle = 'white'
    ctx.fillText('Score: ' + score, 0, oneBlockSize * (map.length + 1))
}

let drawGhosts = () => {
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].moveProcess()
        ghosts[i].eat()
        ghosts[i].draw()
    }
}

let draw = () => {
    craeteRect(0, 0 , canvas.width, canvas.height, 'black')
    drawWalls()
    drawFoods()
    pacman.draw()
    drawScore()
    drawGhosts()
}

let gameInterval = setInterval(gameLoop, 1000 / fps);

let drawWalls = () => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 1) {// then it is a Wall
                craeteRect(j * oneBlockSize, i * oneBlockSize, oneBlockSize, oneBlockSize, '#342DCa');
                if(j > 0 && map[i][j-1] == 1)
                {
                    craeteRect(
                        j * oneBlockSize,
                        i * oneBlockSize + wallOffSet,
                        wallSpaceWidth + wallOffSet,
                        wallSpaceWidth,
                        wallInnerColor)
                }
                if (j < map[0].length - 1 && map[i][j + 1] == 1) {
                    craeteRect(
                        j * oneBlockSize + wallOffSet,
                        i * oneBlockSize + wallOffSet,
                        wallSpaceWidth + wallOffSet,
                        wallSpaceWidth,
                        wallInnerColor)
                }
                if(i > 0 && map[i-1][j] == 1)
                {
                    craeteRect(
                        j * oneBlockSize + wallOffSet,
                        i * oneBlockSize,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffSet,
                        wallInnerColor)
                }
                if (i < map.length - 1 && map[i+1][j] == 1) {
                    craeteRect(
                        j * oneBlockSize + wallOffSet,
                        i * oneBlockSize + wallOffSet,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffSet,
                        wallInnerColor)
                }
            }

        }
      
    }
}

let createNewPacMan = () => {
    pacman = new PacMan(
        oneBlockSize,
        oneBlockSize,
        oneBlockSize,
        oneBlockSize,
        oneBlockSize / 5
        )
}

let createGhosts = () => {
    ghosts = [];
    for (let i = 0; i < 1; i++) {
        var newGhost = new Ghost(
            9 * oneBlockSize + (i % 2 == 0 ? 0 : 1) * oneBlockSize,
            10 * oneBlockSize + (i % 2 == 0 ? 0 : 1) * oneBlockSize,
            oneBlockSize,
            oneBlockSize,
            pacman.speed / 2,
            ghostImageLocations[i % 4].x,
            ghostImageLocations[i % 4].y,
            124,
            116,
            6 + i
        );
        ghosts.push(newGhost);
    }
};

createNewPacMan()
gameLoop()


window.addEventListener('keydown', (e) => {
    let Key = e.keyCode
    console.log(Key)
    
    setTimeout(() =>{
        if (Key == 37 || Key == 65) {
            pacman.nextDirection = DIRECTION_LEFT
        }
        else if (Key == 38 || Key == 87) {
            pacman.nextDirection = DIRECTION_UP
        }
        else if (Key == 39 || Key == 68) {
            pacman.nextDirection = DIRECTION_RIGHT
        }
        else if (Key == 40 || Key == 83) {
            pacman.nextDirection = DIRECTION_BOTTOM
        }

    }, 1)
})
createGhosts()
