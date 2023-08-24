var input1
var input2 
var operator 
let count = 1;
const clickButton = document.getElementsByClassName('numbers');
const display = document.getElementById('display');
const clear = document.getElementById('clear')
const equals = document.getElementById('equals')
const answer = document.getElementById("answer")



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
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


function clearData() {
    display.textContent = ""
    answer.textContent = "";
    
    input1 = 1;
    input2 = 1;
    
}


function identifyNumber () {
    const content = this.textContent
    display.textContent = display.textContent + content
    if (count === 1) {
        input1 = parseInt(content)
        count = count + 1
    } else if (count === 2) {
        operator = content
        count = count + 1
    } else if (count === 3) {
        input2 = parseInt(content);
        count = 1
    }
  

}

for (let i =0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", identifyNumber)
}

clear.addEventListener('click', clearData);
equals.addEventListener('click', function() {
    console.log(input1)
    console.log(input2)
    console.log(operator)
    const result = operate(input1, input2, operator)
    display.textContent = display.textContent + " " + result
})







