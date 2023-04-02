input.onButtonPressed(Button.A, function () {
    number += 10
    basic.showString("" + (number))
})
input.onButtonPressed(Button.AB, function () {
    fumber = number
    if (guessing_number < fumber) {
        basic.showString("lower")
        number = 0
    }
    if (fumber < guessing_number) {
        basic.showString("higher")
        number = 0
    }
    if (fumber == guessing_number) {
        basic.showString("well done")
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        number = 0
        guessing_number = randint(0, 100)
        basic.showIcon(IconNames.Chessboard)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    number += 1
    basic.showString("" + (number))
})
let fumber = 0
let number = 0
let guessing_number = 0
guessing_number = randint(0, 100)
basic.showIcon(IconNames.Chessboard)
basic.clearScreen()
