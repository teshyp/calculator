// * grab elements from html 
const displayBox = document.getElementById('display-result');
const displayCalcBox = document.getElementById('display-calc');
const numbBtn = document.querySelectorAll(".number-btns");
const opBtn = document.querySelectorAll(".op-btns");
const resetBtn = document.getElementById("clear");
const delBtn = document.getElementById("del");
const decimalBtn = document.getElementById("decimal");
const sumKey = document.getElementById("equals");

// Declare data variables
let firstValue = "";
let userOp = "";
let secValue = "";
let runningTotal;

//Event listeners to obtain input values and update display fields on each click
numbBtn.forEach((numberBtn) => {

    decimalBtn.addEventListener("click", (e) => {
        decimalBtn.disabled = true;
    });

    numberBtn.addEventListener("click", (e) => {
        if (userOp == "" || runningTotal == "") {
            firstValue += e.target.value;
            displayCalcBox.innerHTML = firstValue;
            console.log(firstValue);
        } else {
            secValue += e.target.value;
            currentDisplay = runningTotal + userOp + secValue;
            displayCalcBox.innerHTML = secValue;
            console.log(firstValue + userOp + secValue)
        }
    })
});

opBtn.forEach(op => {
    op.addEventListener("click", (e) => {
        userOp += e.target.value;
        displayCalcBox.innerHTML = userOp;
        return userOp
    })
});

// Run full calcualtor by pressing equals key and display final result
sumKey.addEventListener("click", function () {
    decimalBtn.disabled = false;

    if (userOp == "/" && secValue == "0") {
        displayCalcBox.innerHTML = "Error - zero division"
    } else {

        if (userOp == "+") {
            runningTotal = firstValue + secValue;
            displayBox.innerHTML = runningTotal;
            return runningTotal
        } else if (userOp == "*") {
            runningTotal = firstValue * secValue;
            displayBox.innerHTML = runningTotal;
            return runningTotal
        } else if (userOp == "-") {
            runningTotal = firstValue - secValue;
            displayBox.innerHTML = runningTotal;
            return runningTotal
        } else if (userOp == "/") {
            runningTotal = firstValue / secValue;
            displayBox.innerHTML = runningTotal;
            return runningTotal
        } else if (userOp == "%") {
            runningTotal = (firstValue / 100) * secValue;
            displayBox.innerHTML = runningTotal;
            return runningTotal;
        }

    }



    // rewrite above as switch statement
});

// Reset calculator and all variables
resetBtn.addEventListener("click", function (e) {
    firstValue = "";
    secValue = "";
    userOp = "";
    displayCalcBox.innerHTML = 0;
    displayBox.innerHTML = 0;
    decimalBtn.disabled = false;
});