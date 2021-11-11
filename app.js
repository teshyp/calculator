// * grab elements from html */
const displayBox = document.getElementById('display-result');
const displayCalcBox = document.getElementById('display-calc');
const numbBtn = document.querySelectorAll(".number-btns");
const opBtn = document.querySelectorAll(".op-btns");
// const opBtnValue = document.querySelectorAll(".op-btns").value;
const valBtn = document.querySelectorAll(".val-btn");
const allBtns = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("clear");
const delBtn = document.getElementById("del");
const sumKey = document.getElementById("equals")
//const TBCKey = document.getElementById('X');


let userNo1 = [];
let userOp = [];
let userNo2 = [];

//Event listeners to obtain input values and update display fields

numbBtn.forEach((numberBtn) => {
    numberBtn.addEventListener("click", (e) => {
        // if userOp !== * or + or - etc ...then add value to userNo1...else add the value to userNo2
        if (userOp == "") {
            userNo1 += e.target.value;
            displayCalcBox.innerHTML = userNo1;
            console.log(userNo1);
        } else {
            userNo2 += e.target.value;
            displayCalcBox.innerHTML = userNo1 + userOp + userNo2;
            console.log(userNo1 + userOp + userNo2)
            //oneRound(userNo1, userOp, userNo2);
        }
    })
});

opBtn.forEach(op => {
    op.addEventListener("click", (e) => {
        userOp = e.target.value;
        displayCalcBox.innerHTML = userNo1 + userOp + userNo2;
        console.log(userOp)
    })
});

// function to run calcualtor
// sumKey.addEventListener("click", oneRound(userNo1, userOp, userNo2)) {};


// Reset calculator
resetBtn.addEventListener("click", function (e) {
    userNo1 = "";
    userNo2 = "";
    userOp = "";
    displayCalcBox.innerHTML = 0;
    displayBox.innerHTML = 0;
});


//Operator function and display final total
function oneRound(a, op, b) {
    let runningTotal;
    if (op == "+") {
        runningTotal = a + b;
        displayBox.innerHTML = runningTotal;
        return runningTotal
    } else if (op == "*") {
        runningTotal = a * b;
        displayBox.innerHTML = runningTotal;
        return runningTotal
    } else if (op == "-") {
        runningTotal = a - b;
        displayBox.innerHTML = runningTotal;
        return runningTotal
    } else if (op == "/") {
        runningTotal = a / b;
        displayBox.innerHTML = runningTotal;
        return runningTotal
    } else if (op == "/") {
        runningTotal = a / 100;
        displayBox.innerHTML = runningTotal;
        return runningTotal;
    }
}


