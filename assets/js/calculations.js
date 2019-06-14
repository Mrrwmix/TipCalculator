// Made a class with a constructor and getter that calculates the tip amount

class Tip {
    constructor(_total, _percent, _split = 1){ //If there's no split value given, it will default to 1
        this.total = _total;
        this.percent = _percent;
        this.split = _split;
    }

    get tipAmount () {
        return (this.percent * 0.01 * this.total / this.split).toFixed(2);
    }
}