// * DOM elements
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
        if (userOp == "") {
            userOp = e.target.value;
            displayCalcBox.innerHTML = userOp;
            return userOp
        }
    })
});


// function for each math operator
function add(firstValue, secValue) {
    runningTotal = firstValue + secValue;
    firstValue = runningTotal;
    return runningTotal;
}

function substract(firstValue, secValue) {
    runningTotal = firstValue - secValue;
    return runningTotal;
}

function multiply(firstValue, secValue) {
    runningTotal = firstValue * secValue;
    return runningTotal;
}

function divide(firstValue, secValue) {
    runningTotal = firstValue / secValue;
    return runningTotal;
}

function percentage(firstValue) {
    runningTotal = firstValue / 100;
    return runningTotal;
}


// function to operate calculator and display final result
function operateCalc() {
    decimalBtn.disabled = false;

    if (userOp == "/" && secValue == "0") {
        displayCalcBox.innerHTML = "Dividing by zero?"
        displayBox.innerHTML = "Press clear"

    } else {
        switch (userOp) {
            case "+":
                runningTotal = add(Number(firstValue), Number(secValue));
                break;
            case "-":
                runningTotal = substract(Number(firstValue), Number(secValue));
                break;
            case "*":
                runningTotal = multiply(Number(firstValue), Number(secValue));
                break;
            case "/":
                runningTotal = divide(Number(firstValue), Number(secValue));
                break;
            case "%":
                runningTotal = percentage(Number(firstValue), Number(secValue));
                break;
            default:
                break;
        };
        displayBox.innerText = +runningTotal.toFixed(2);
        userOp = "";
        secValue = "";
        firstValue = runningTotal;
    }
};

// function to reset calculator
function resetCalc() {
    firstValue = "";
    secValue = "";
    userOp = "";
    displayCalcBox.innerHTML = "";
    displayBox.innerHTML = "";
    decimalBtn.disabled = false;
    console.log("Calculator reset")
};


// Function for keyboard support
function keyboardSupport(e) {
    // get numbers between 0-9 and update display
    if (e.key >= 0 && e.key <= 9 || e.key == '.') {
        if (firstValue == "" || userOp == "") {
            let pressedVal = e.key;
            firstValue += pressedVal;
            displayCalcBox.innerHTML = firstValue;
            console.log("firstValue" + " " + firstValue);
        } else {
            let secPressedVal = e.key;
            secValue += secPressedVal;
            displayCalcBox.innerHTML = secValue;
            console.log(firstValue + userOp + secValue);
        }
    };
    // get operator value and update display
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        if (userOp === "") {
            userOp = e.key;
            displayCalcBox.innerHTML = userOp;
            console.log(firstValue + userOp);
        }
    }
    if (e.key == '=' || e.key == 'Enter') operateCalc(); // operate calc on Enter or equals
    if (e.key == 'Delete' || e.key == "Backspace" || e.key == "Escape") resetCalc(); // reset calculator on del and esc
}

// Event Listeners
window.addEventListener("keydown", keyboardSupport) // Keyboard support
sumKey.addEventListener("click", operateCalc) // Run full calcualtor click on sum
resetBtn.addEventListener("click", resetCalc)// Reset calculator and all variables