class ElectricLamp {
    constructor() {
        this.status = false
    }

    turnOff() {
        if (this.status === true) {
            this.status = false;
            this.lightOff();
        }
    }

    turnOn() {
        if (this.status === false) {
            this.status = true;
            this.lightOn();
        }
    }

    lightOn() {
        let image = document.getElementById("myImage");
        image.src = "image/pic_bulbon.gif"

    }

    lightOff() {
        let image = document.getElementById("myImage");
        image.src = "image/pic_bulboff.gif"

    }
}