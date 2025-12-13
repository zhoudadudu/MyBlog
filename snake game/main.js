
var blockSize = 25;
var rows = 20;
var cols = 20;
var gameOver = false;

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = cols * blockSize;
canvas.height = rows * blockSize;



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