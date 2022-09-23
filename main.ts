basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(300)
    }
    for (let index = 0; index < 2; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 3; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(300)
    }
})
