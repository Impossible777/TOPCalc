var input1
var input2 
var operator 
let count = 1;
let displayCount = 0;
let tempInput = ""
const clickButton = document.getElementsByClassName('numbers');
const display = document.getElementById('display');
const clear = document.getElementById('clear')
const equals = document.getElementById('equals')
const answer = document.getElementById("answer")
const deleteChar = document.getElementById("delete");



function add(a, b) {
    let addition = a + b;
    return addition.toFixed(2)
}

function subtract(a, b) {
    let subtraction = a - b
    return subtraction.toFixed(2)
}

function multiply(a, b) {
    let multiplication = a * b
    return multiplication.toFixed(2)
}

function divide(a, b) {
    let division = a / b
    return division.toFixed(2)

}

function operate(a, b, perform) {
    if (perform == "+") {
        return add(a,b)
    } else if (perform == "-") {
        return subtract(a,b)
    } else if (perform == "*") {
        return multiply(a,b)
    } else if (perform == "/") {
        return divide(a,b)
    } else {
        return "Not a valid operator"

    }
}


function deleteLastEntry() {
    displayContent = display.textContent
    if (displayContent.length > 0) {
        display.textContent = displayContent.slice(0, -1)
    } else {
        display.textContent = display.textContent
    }


}

function clearData() {
    display.textContent = ""
    answer.textContent = "";
    
    input1 = 1;
    input2 = 1;
    count = 1;
    tempInput = ""
    displayCount = 0;
    
}

function changeDisplay () {
    const content = this.textContent
    if ( content === "+" || content === "-" || content === "*" || content === "/") {
        if (displayCount ===1) {
            display.textContent = ""
            display.textContent = input1 + " " + content + " "

        } else {
        display.textContent = display.textContent + " " + content + " "
        }
    }
     else {
        display.textContent = display.textContent + content
    }
}

function assignInputs() {
    let temporary = display.textContent.split(' ')
    input1 = parseFloat(temporary[0])
    input2 = parseFloat(temporary[2])
    operator = temporary[1]

}

for (let i =0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", changeDisplay)
}


deleteChar.addEventListener('click', deleteLastEntry);
clear.addEventListener('click', clearData);
equals.addEventListener('click', assignInputs)
equals.addEventListener('click', function() {
    displayCount =1;
    const result = operate(input1, input2, operator)
    display.textContent = display.textContent + " =" 
    answer.textContent = result
    input1 = result
})







