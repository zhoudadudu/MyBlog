const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 768
canvas.height = 512




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