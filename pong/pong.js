const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 768
canvas.height = 512

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

const paddle1 = new Paddle(10, canvas.height / 2 - 50)

const paddle2 = new Paddle(canvas.width - 10 * 2, canvas.height / 2 - 50)

const ball = new Ball(canvas.width / 2, canvas.height / 2)




addEventListener('keydown', (event) => {
    const speed = 5
    switch (event.key) {
        case 'w':
            paddle1.velocity.y = -speed
            break

        case 's':
            paddle1.velocity.y = speed
            break

        case 'ArrowUp':
            paddle2.velocity.y = -speed
            break

        case 'ArrowDown':
            paddle2.velocity.y = speed
            break
    }
})

addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            //go up
            paddle1.velocity.y = 0
            break

        case 's':
            //go down
            paddle1.velocity.y = 0
            break

        case 'ArrowUp':
            //go up
            paddle2.velocity.y = 0
            break

        case 'ArrowDown':
            //go down
            paddle2.velocity.y = 0
            break
    }
});



function mainLoop() {

    context.fillStyle = 'black'
    context.fillRect(0, 0, canvas.width, canvas.height)

    paddle2.update()
    paddle1.update()

    ball.update()
}


const fps = 60
const interval = 1000 / fps
const loopId = setInterval(mainLoop, interval)