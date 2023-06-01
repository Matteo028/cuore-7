basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
