class Food {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        context.fillStyle = "red"
        context.fillRect(this.x, this.y, blockSize, blockSize)
    }

    placeFood() {
        this.x = Math.floor(Math.random() * cols) * blockSize
        this.y = Math.floor(Math.random() * rows) * blockSize
    }
}