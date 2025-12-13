addEventListener('keydown', ({ key }) => {
    if (game.over) return


    switch (key) {
        case 'a':
            // console.log('left')

            keys.a.pressed = true
            break
        case 'd':
            // console.log('right')
            keys.d.pressed = true
            break
        case ' ':
            // console.log('space')
            projectiles.push(
                new Projectile({
                    position: {
                        x: player.position.x + player.width / 2,
                        y: player.position.y
                    },
                    velocity: {
                        x: 0,
                        y: -10
                    }
                }))

            // console.log(projectiles)
            break
    }
})

addEventListener('keyup', ({ key }) => {
    switch (key) {
        case 'a':
            // console.log('left')
            keys.a.pressed = false

            break
        case 'd':
            // console.log('right')
            keys.d.pressed = false
            break
        case ' ':
            // console.log('space')
            break
    }
})