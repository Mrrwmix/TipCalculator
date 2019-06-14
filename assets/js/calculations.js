// Made a class with a constructor to take in the input field values and a getter that calculates the tip amount

class Tip {
    constructor(_total, _percent, _split = 1) {
        this.total = _total;
        this.percent = _percent;
        //If there's no split value given, it will default to 1
        if (_split !== '') {
            this.split = _split;
        }
        else {
            this.split = 1;
        }
    }
    // Calculates the tip and returns a value rounded up to the hundredths place
    get tipAmount() {
        return (Math.ceil((this.percent * 0.01 * this.total / this.split)*100)/100).toFixed(2);
    }
}

// Disabling negative numbers
onload = function () {
    for (var i = 0; i < 3; i++) {
        var ele = document.querySelectorAll('.number-only')[i];
        ele.onkeypress = function (e) {
            if (isNaN(this.value + "" + String.fromCharCode(e.charCode)))
                return false;
        }
        ele.onpaste = function (e) {
            e.preventDefault();
        }
    }
}

// The calculate button displays the tip amount
document.getElementById("calculate").onclick = function () {
    event.preventDefault();
    let myTip = new Tip(document.getElementById('amount').value, document.getElementById('percent').value, document.getElementById('split').value);
    if (myTip.split == 1) {
        // Showing only the dollar amount for 1 person
        document.getElementById('tipDisplay').textContent = '$' + myTip.tipAmount;
    }
    else {
        // Showing the dollar amount plus 'per person' if the tip is split among the party
        document.getElementById('tipDisplay').textContent = '$' + myTip.tipAmount + ' per person';
    }
}

/* Put in a clear function to take away the input values and tip amount.
This could have been done with the calculate button, but I wanted the user to be able to adjust
numbers as needed
*/
document.getElementById("clear").onclick = function () {
    event.preventDefault();
    document.getElementById('amount').value = '';
    document.getElementById('percent').value = '';
    document.getElementById('split').value = '';
    document.getElementById('tipDisplay').textContent = '';
}