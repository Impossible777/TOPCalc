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
    count = 1;
    tempInput = ""
    displayCount = 0;
    
}

function changeDisplay () {
    const content = this.textContent
    if ( content === "+" || content === "-" || content === "*" || content === "/") {
        if (displayCount ===1) {
            display.textContent = ""
            display.textContent = input1 + " " + content

        } else {
        display.textContent = display.textContent + " " + content + " "
        }
    }
     else {
        display.textContent = display.textContent + content
    }
}


function identifyNumber () {
    const content = this.textContent
    let temp = this.textContent
    if (content != "+" && content != "-" && content != "*" && content != "/" && count ===1) {
        tempInput = tempInput + content
        input1 = parseInt(tempInput)
    } else if (content === "+" || content === "-" || content === "*" || content === "/") {
        operator = content
        count = count + 1
        tempInput = ""
        display.textContent = display.textContent + " "
    } else if (content != "+" && content != "-" && content != "*" && content != "/" && count ===2) {
        tempInput = tempInput + content;
        input2 = parseInt(tempInput);
        console.log(input2)
    }
  

}

for (let i =0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", changeDisplay)
}
for (let i =0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", identifyNumber)
}


clear.addEventListener('click', clearData);
equals.addEventListener('click', function() {
    count =1
    displayCount =1;
    const result = operate(input1, input2, operator)
    display.textContent = display.textContent + " =" 
    answer.textContent = result
    input1 = result
})







