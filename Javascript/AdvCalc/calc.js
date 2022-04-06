window.addEventListener("load", initEvents);

var textBox;
function initEvents() {
    textBox = document.querySelector("#box");
    var buttons = document.querySelectorAll(".num");
    var operators = document.querySelectorAll(".opr");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", appendNumber);
    }

    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", appendOperator);
    }
}

function appendNumber() {
    textBox.value += this.innerHTML;
}

function appendOperator() {
    textBox.value += this.innerHTML;
}