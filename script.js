var input1
var input2
var operator



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
        return "Not a valied operator"
    }
}

const clickButton = document.getElementsByClassName('numbers');

for (let i = 0; i <clickButton.length; i++) {
    clickButton[i].addEventListener("click", function() {
        console.log("Clicked!")
    })
}






