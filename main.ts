serial.writeLine("" + (sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)))
basic.showNumber(sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
))
basic.forever(function () {
    music.playTone(440, music.beat(BeatFraction.Half))
    basic.pause(200)
    music.playTone(494, music.beat(BeatFraction.Half))
})
basic.forever(function () {
    music.setVolume(255)
})
