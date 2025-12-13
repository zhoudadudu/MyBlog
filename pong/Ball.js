
class Ball {
    constructor(x, y) {
        this.x = x
        this.y = y

        const speed = 2
        const direction = {
            x: Math.random() - 0.5 >= 0 ? -speed : speed,
            y: Math.random() - 0.5 >= 0 ? -speed : speed,
        }
        this.velocity = {
            x: direction.x,
            y: direction.y,
        }

        this.width = 10
        this.height = 10
    }

    draw() {
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, this.width, this.height)
    }


    update() {
        this.draw()
        const rightSide = this.x + this.width + this.velocity.x//球右侧
        const leftSide = this.x + this.velocity.x//球左侧
        const bottomSide = this.y + this.height//球底部
        const topSide = this.y//球顶部

        // 小球碰到左边球拍拍面
        if (leftSide <= paddle1.x + paddle1.width && bottomSide >= paddle1.y && topSide <= paddle1.y + paddle1.height) {
            this.velocity.x = -this.velocity.x
        }


        // 小球碰到右边球拍拍面
        if (rightSide >= paddle2.x && bottomSide >= paddle2.y && topSide <= paddle2.y + paddle2.height) {
            this.velocity.x = -this.velocity.x
        }

        // 小球碰到上下壁
        if (this.y + this.height + this.velocity.y >= canvas.height || this.y + this.velocity.y <= 0) {
            this.velocity.y = -this.velocity.y
        }

        // 小球碰到左右壁
        if (leftSide <= 0 || rightSide >= canvas.width) {
            this.velocity.x = -this.velocity.x
        }

        //球移动
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}