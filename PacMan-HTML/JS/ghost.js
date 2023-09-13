class Ghost {
    constructor(
        x,
        y,
        width,
        height,
        speed,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        range
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.imageX = imageX;
        this.imageY = imageY;
        this.imageHeight = imageHeight;
        this.imageWidth = imageWidth;
        this.range = range;

    }

    moveProcess(){
        this.changeDirectionIfPossible()
        this.moveForward()
        if (this.checkCollision()) {
            this.moveBackwards()
        }

    }

    moveBackwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break
            case DIRECTION_LEFT:
                this.x += this.speed
                break
            case DIRECTION_UP:
                this.y += this.speed
                break
            case DIRECTION_BOTTOM:
                this.y -= this.speed
                break
        }
    }

    moveForward(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed
                break
            case DIRECTION_LEFT:
                this.x -= this.speed
                break
            case DIRECTION_UP:
                this.y -= this.speed
                break
            case DIRECTION_BOTTOM:
                this.y += this.speed
                break
        }
    }

    checkCollision(){
        let isCollided = false
         if(map[this.getMapY()][this.getMapX()] == 1 
         || map[this.getMapYRightSide()][this.getMapX()] == 1
         || map[this.getMapY()][this.getMapXRightSide()] == 1
         || map[this.getMapYRightSide()][this.getMapXRightSide()] == 1){
            return true
         }
         return false
    }

    checkGhostCollision(){
        
    }

    changeDirectionIfPossible(){
        if(this.direction == this.nextDirection) return
        
        let tempDir = this.direction
        this.direction = this.nextDirection
        this.moveFowards()
        if (this.checkCollision()) {
            this.moveBackwards()
            this.direction = tempDir
        } else {
            this.moveBackwards()
        }
    }

    draw() {
        canvasContext.save();
        canvasContext.drawImage(
            ghostFrames,
            this.imageX,
            this.imageY,
            this.imageWidth,
            this.imageHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
        canvasContext.restore();
        canvasContext.beginPath();
        canvasContext.strokeStyle = "red";
        canvasContext.arc(
            this.x + oneBlockSize / 2,
            this.y + oneBlockSize / 2,
            this.range * oneBlockSize,
            0,
            2 * Math.PI
        );
        canvasContext.stroke();
    }


    getMapX() {
        let mapX = parseInt(this.x / oneBlockSize);
        return mapX;
    }

    getMapY() {
        let mapY = parseInt(this.y / oneBlockSize);
        return mapY;
    }

    getMapXRightSide() {
        let mapX = parseInt((this.x * 0.99 + oneBlockSize) / oneBlockSize);
        return mapX;
    }

    getMapYRightSide() {
        let mapY = parseInt((this.y * 0.99 + oneBlockSize) / oneBlockSize);
        return mapY;
    }
}