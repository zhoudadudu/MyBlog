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