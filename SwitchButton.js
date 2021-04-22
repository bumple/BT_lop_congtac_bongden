class SwitchButton {
    constructor() {
        this.status = false
        this.connecStatus = false
    }

    connecToLamp() {
        this.connecStatus = true;
        document.getElementById("statusConnection").innerHTML = this.connecStatus
    }

    switchOff() {
        if (this.connecStatus === true  && this.status === true) {
            electriclamp.turnOff();
            this.status = false;
            console.log("công tắc: tắt");
            let image = document.getElementById("imgStatusswitch");
            image.src = "image/off.png";
        } else {
            alert("chưa kết nối công tắc với bóng đèn")
        }
    }

    switchOn() {
        if (this.connecStatus === true && this.status===false) {
            electriclamp.turnOn();
            this.status = true;
            console.log("công tắc: bật");
            let image = document.getElementById("imgStatusswitch");
            image.src = "image/on.png"
        } else {
            alert("chưa kết nối công tắc với bóng đèn")
        }
    }

}

