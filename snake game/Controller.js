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