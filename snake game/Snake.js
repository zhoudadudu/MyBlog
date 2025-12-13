class Snake {

    constructor({ position }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 0
        }

        //蛇身初始化
        this.body = [[position.x, position.y]]
    }

    draw() {
        context.fillStyle = "lime";
        //画蛇头
        context.fillRect(this.position.x, this.position.y, blockSize, blockSize);

        //画蛇身
        for (let i = 0; i < this.body.length; i++) {
            context.fillRect(this.body[i][0], this.body[i][1], blockSize, blockSize);
        }
    }

    update() {

        this.draw();

        //蛇撞墙
        if (this.position.x < 0 || this.position.x >= cols * blockSize || this.position.y < 0 || this.position.y >= rows * blockSize) {
            gameOver = true
            alert("Game Over")
        }

        //蛇移动
        this.position.x += this.velocity.x * blockSize
        this.position.y += this.velocity.y * blockSize

        //蛇撞自己
        if (this.body.length > 1) {
            for (let i = 1; i < this.body.length; i++) {
                if (snake.position.x == this.body[i][0] && snake.position.y == this.body[i][1]) {
                    gameOver = true
                    alert("Game Over")
                    console.log("撞自己")
                }
            }
        }

        //蛇吃食物
        if (this.position.x == food.x && this.position.y == food.y) {
            this.body.push([food.x, food.y])
            food.placeFood()
        }
        //更新蛇身位置
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i] = this.body[i - 1];
        }
        //更新蛇头位置
        if (this.body.length) {
            this.body[0] = [this.position.x, this.position.y];
        }

    }
}