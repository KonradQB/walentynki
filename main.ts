radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(punkty)
})
let punkty = 0
let lv = 250
punkty = 0
radio.setGroup(1)
basic.forever(function () {
    serial.writeValue("x", input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > lv || input.acceleration(Dimension.X) < lv * -1) {
        basic.showIcon(IconNames.Skull)
        punkty += 1
        radio.sendNumber(5)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
