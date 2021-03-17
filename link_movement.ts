// Add your code here
function moveRight() {
    pause(10)
    if (toggle == 0) {
        link.setImage(img`
            . . . . . 7 7 7 7 . . . . . . .
            . . . 7 7 7 7 7 e e e e . . . .
            . 7 7 7 4 7 7 e e e e e e . . .
            7 7 7 7 4 4 e e e e e e . . . .
            7 . 7 7 4 4 4 e 4 4 7 4 . . e .
            . . 7 e e 4 4 e 4 4 e 4 4 4 e .
            . . . e e e 4 4 4 4 4 4 . . e .
            . . . . 7 7 7 7 4 4 4 4 . . e .
            . . e 7 7 7 7 7 7 7 e e e 4 e .
            . e e e 7 4 4 4 7 7 7 e e 4 e .
            . e e e e 4 4 4 7 7 7 e e . e .
            . e e e e 4 4 7 7 7 e . . . e .
            . . 7 e e 7 7 e e e e . . . . .
            . 7 7 7 7 7 7 7 7 7 7 . . . . .
            . . . . e e e e . . . . . . . .
            . . . . e e e e e . . . . . . .
        `)
        toggle = 1
    } else {
        link.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . 7 7 7 7 . . . . . . .
            . . . 7 7 7 7 7 e e e e . . . .
            . 7 7 7 4 7 7 e e e e e e . . .
            7 7 7 7 4 4 e e e e e e . . . .
            7 . 7 7 4 4 4 e 4 4 7 4 . . . .
            . . 7 e e 4 4 e 4 4 e 4 4 4 . .
            . . . e e e 4 4 4 4 4 4 . e . .
            . . . . 7 7 7 7 4 4 4 4 . e . .
            . . 7 e e 7 7 4 4 4 e e 4 e . .
            . . e e e e e 4 4 4 7 e 4 e . .
            . 7 e e e e e 4 4 7 7 e . e . .
            . 7 7 e e e e 7 7 7 e . . e . .
            e e 7 7 7 7 7 e e e e 7 . e . .
            e e e 7 7 7 7 7 7 7 7 e e . . .
            . e e e . . . . . e e e . . . .
        `)
        toggle = 0
    }
    state = "RIGHT"
}
function moveUp() {
    pause(10)
    if (toggle == 0) {
        link.setImage(img`
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . 4 . 7 7 7 7 7 7 7 7 . . . .
            . . 4 7 7 7 7 7 7 7 7 7 7 4 . .
            . . 4 e 7 7 7 7 7 7 7 7 e 4 . .
            . . 4 4 e e 7 7 7 7 e e 4 4 . .
            . . . 4 e e e 7 7 e e e 4 . . .
            . . . e 7 e e e e e e 7 e . . .
            . . e e 7 7 7 7 7 7 7 e e . . .
            . . e e 7 7 7 7 7 7 7 e e 4 . .
            . . . e e 7 7 7 7 7 7 e e 4 . .
            . . . 7 7 e e e e e e 7 4 4 . .
            . . . 7 7 7 7 7 7 7 7 7 7 . . .
            . . . e e e 7 7 7 7 7 e . . . .
            . . . e e e e . . e e . . . . .
            . . . . e e . . . . . . . . . .
        `)
        toggle = 1
    } else {
        link.setImage(img`
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . 4 . 7 7 7 7 7 7 7 7 . 4 . .
            . . 4 7 7 7 7 7 7 7 7 7 7 4 . .
            . . 4 e 7 7 7 7 7 7 7 7 e 4 . .
            . . 4 4 e e 7 7 7 7 e e 4 4 . .
            . . . 4 e e e 7 7 e e e 4 . . .
            . . . e 7 e e e e e e 7 e . . .
            . . . e e 7 7 7 7 7 7 7 e e . .
            . . 4 e e 7 7 7 7 7 7 7 e e . .
            . . 4 e e 7 7 7 7 7 7 e e . . .
            . . 4 4 7 e e e e e e 7 7 . . .
            . . . 7 7 7 7 7 7 7 7 7 7 . . .
            . . . . e 7 7 7 7 7 e e e . . .
            . . . . . e e . . e e e e . . .
            . . . . . . . . . . e e . . . .
        `)
        toggle = 0
    }
    state = "UP"
}
function moveLeft() {
    pause(10)
    if (toggle == 0) {
        link.setImage(img`
            . . . . . . . 7 7 7 7 . . . . .
            . . . . e e e e 7 7 7 7 7 . . .
            . . . e e e e e e 7 7 4 7 7 7 .
            . . . . e e e e e e 4 4 7 7 7 7
            . e . . 4 7 4 4 e 4 4 4 7 7 . 7
            . e 4 4 4 e 4 4 e 4 4 e e 7 . .
            . e . . 4 4 4 4 4 4 e e e . . .
            . e . . 4 4 4 4 7 7 7 7 . . . .
            . e 4 e e e 7 7 7 7 7 7 7 e . .
            . e 4 e e 7 7 7 4 4 4 7 e e e .
            . e . e e 7 7 7 4 4 4 e e e e .
            . e . . . e 7 7 7 4 4 e e e e .
            . e . . . e e e e 7 7 e e 7 . .
            . e . . . 7 7 7 7 7 7 7 7 7 7 .
            . . . . . . . e e e e e . . . .
            . . . . . . e e e e e e . . . .
        `)
        toggle = 1
    } else {
        link.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . 7 7 7 7 . . . . .
            . . . . e e e e 7 7 7 7 7 7 . .
            . . . e e e e e e 7 7 4 7 7 7 .
            . . . . e e e e e e 4 4 7 7 7 7
            . . . . 4 7 4 4 e 4 4 4 7 7 . 7
            . . 4 4 4 e 4 4 e 4 4 e e 7 . .
            . . e . 4 4 4 4 4 4 e e e . . .
            . . e . 4 4 4 4 7 7 7 7 . . . .
            . . e 4 e e 4 4 4 7 7 e e 7 . .
            . . e 4 e 7 4 4 4 e e e e e . .
            . . e . e 7 7 4 4 e e e e e 7 .
            . . e . . e 7 7 7 e e e e 7 7 .
            . . e . 7 e e e e 7 7 7 7 7 e e
            . . . e e 7 7 7 7 7 7 7 7 e e e
            . . . . e e e . . . . . e e e .
        `)
        toggle = 0
    }
    state = "LEFT"
}
function moveDown() {
    pause(10)
    if (toggle == 0) {
        link.setImage(img`
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . . . 7 e e e e e e 7 . . . .
            . . 4 . e e e e e e e e . 4 . .
            . . 4 . e 4 7 4 4 7 4 e . 4 . .
            . . 4 4 e 4 e 4 4 e 4 e 4 4 . .
            . . 4 4 e 4 4 4 4 4 4 e 4 4 . .
            . . . 4 4 4 4 e e 4 4 4 4 e . .
            . . . 7 7 4 4 4 4 4 4 7 7 e . .
            . e e e e e 4 4 4 4 7 7 e e e .
            e e 4 e e e e 7 7 7 7 7 4 e e .
            e 4 4 4 e e 4 e e 7 7 4 4 4 e .
            e e 4 e e e 4 7 e e e 7 4 4 4 .
            e e 4 e e e 4 e e 7 7 7 7 4 . .
            e e e e e e 4 7 7 7 7 7 . . . .
            . 4 4 4 4 4 e . . e e e . . . .
        `)
        toggle = 1
    } else {
        link.setImage(img`
            . . . . . 7 7 7 7 7 7 . . . . .
            . . . . 7 7 7 7 7 7 7 7 . . . .
            . . 4 . 7 e e e e e e 7 . 4 . .
            . . 4 . e e e e e e e e . 4 . .
            . . 4 4 e 4 7 4 4 7 4 e 4 4 . .
            . . 4 4 e 4 e 4 4 e 4 e 4 4 . .
            . . . 4 4 4 4 4 4 4 4 4 4 e . .
            . . . . 7 4 4 e e 4 4 7 e e . .
            . . e e e e e 4 4 4 7 7 7 4 . .
            . e e 4 e e e e 7 7 7 7 7 4 . .
            . e 4 4 4 e e 4 e e 7 7 e . . .
            . e e 4 e e e 4 7 e e e 7 . . .
            . e e 4 e e e 4 e e 7 7 7 . . .
            . e e e e e e 4 7 7 7 e . . . .
            . . 4 4 4 4 4 . . e e e . . . .
            . . . . . . . . . e e e . . . .
        `)
        toggle = 0
    }
    state = "DOWN"
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveLeft()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    moveRight()
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    moveDown()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    moveLeft()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveUp()
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    moveUp()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveDown()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveRight()
})