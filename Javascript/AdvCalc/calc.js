window.addEventListener("load", initEvents);

var textBox;
var boxValue;
function initEvents() {
    textBox = document.querySelector("#box");
    var buttons = document.querySelectorAll(".num");
    var operators = document.querySelectorAll(".opr");
    var resultBtn = document.querySelector(".result");
    resultBtn.addEventListener("click", calculateResult);
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", appendNumber);
    }

    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", appendOperator);
    }
}

function appendNumber() {
    textBox.value += this.innerHTML;
    boxValue = textBox.value;
}

function appendOperator() {
    textBox.value = boxValue + this.innerHTML;
}

function calculateResult() {
    var result = eval(textBox.value);
    textBox.value = result;
}