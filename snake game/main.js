
var blockSize = 25;
var rows = 20;
var cols = 20;
var gameOver = false;

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = cols * blockSize;
canvas.height = rows * blockSize;



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

addEventListener("keydown", (event) => {

    if (snake.body.length == 1) {
        switch (event.key) {
            case 'w':
                snake.velocity.x = 0;
                snake.velocity.y = -1;
                break

            case 's':
                snake.velocity.x = 0;
                snake.velocity.y = 1;
                break

            case 'a':
                snake.velocity.x = -1;
                snake.velocity.y = 0;
                break

            case 'd':
                snake.velocity.x = 1;
                snake.velocity.y = 0;
                break
        }
    }

    if (snake.body.length > 1) {
        switch (event.key) {
            case 'w':
                if (snake.velocity.y != 1) {
                    snake.velocity.x = 0;
                    snake.velocity.y = -1;
                }
                break

            case 's':
                if (snake.velocity.y != -1) {
                    snake.velocity.x = 0;
                    snake.velocity.y = 1;
                }
                break

            case 'a':
                if (snake.velocity.x != 1) {
                    snake.velocity.x = -1;
                    snake.velocity.y = 0;
                }
                break

            case 'd':
                if (snake.velocity.x != -1) {
                    snake.velocity.x = 1;
                    snake.velocity.y = 0;
                }
                break
        }
    }
})
//主循环
function mainLoop() {

    if (gameOver) {
        return
    }

    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)

    food.draw()

    snake.update()
}

//蛇位置初始化
const snake = new Snake({
    position: {
        x: Math.floor(Math.random() * cols) * blockSize,
        y: Math.floor(Math.random() * rows) * blockSize
    }
})

//食物位置初始化
const food = new Food(Math.floor(Math.random() * cols) * blockSize, Math.floor(Math.random() * rows))

food.placeFood()

setInterval(mainLoop, 100);