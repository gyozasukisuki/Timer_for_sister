input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (Rogo_is_touched == 0) {
        Rogo_is_touched = 1
        while (true) {
        	
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    if (i == 1) {
        if (Mode == 0) {
            Mode = 1
        } else {
            Mode = 0
        }
    }
})
let L = 0
let s = 0
let m = 0
let h = 0
let Time = ""
let i = 0
let Rogo_is_touched = 0
let Mode = 0
Mode = 0
Rogo_is_touched = 0
basic.forever(function () {
    if (i == 0) {
        while (true) {
            basic.showString("What is the time?")
            while (true) {
                Time = "" + convertToText(h) + ":" + convertToText(m)
                basic.showString(Time)
                if (input.pinIsPressed(TouchPin.P0)) {
                    h += 1
                }
                if (input.pinIsPressed(TouchPin.P1)) {
                    m += 1
                }
                if (input.buttonIsPressed(Button.A)) {
                    break;
                }
            }
            i = 1
            basic.showString("Clock is end setting")
            break;
        }
    } else {
        if (h == 0 && m == 3) {
            music.setBuiltInSpeakerEnabled(true)
            music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
        }
        if (Mode == 0) {
            Time = "" + convertToText(h) + ":" + convertToText(m) + "." + convertToText(s)
            basic.showString(Time)
        } else {
            basic.showString("" + convertToText(input.temperature()) + "Celsius")
        }
        if (true) {
            s = Math.round(input.runningTime() / 1000 - 60 * L)
            if (s > 60) {
                m += 1
                L += 1
            }
            if (m == 60) {
                h += 1
                m = 0
            }
            if (h == 24) {
                h = 0
            }
        }
    }
})
