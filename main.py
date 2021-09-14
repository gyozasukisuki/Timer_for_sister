Time = ""
i = 0
s = 0
h = 0
m = 0

def on_forever():
    global Time, i
    if i == 0:
        while True:
            basic.show_string("What is the time?")
            while True:
                Time = "" + convert_to_text(h) + ":" + convert_to_text(m)
                basic.show_string(Time)
            i = 1
            break
    else:
        pass
basic.forever(on_forever)
