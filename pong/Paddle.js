class Paddle {
    constructor(x, y) {
        this.x = x
        this.y = y

        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 10
        this.height = 100
    }

    draw() {
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {
        this.draw()

        if (this.y + this.velocity.y > 0 //如果速度不为0
            && this.y + this.height + this.velocity.y < canvas.height)//且 位置+面积+速度在画布内
            this.y += this.velocity.y //更新位置
    }
}