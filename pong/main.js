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


const paddle1 = new Paddle(10, canvas.height / 2 - 50)

const paddle2 = new Paddle(canvas.width - 10 * 2, canvas.height / 2 - 50)

const ball = new Ball(canvas.width / 2, canvas.height / 2)




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