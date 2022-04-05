window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box_1");
    snum = document.querySelector("#box_2");
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    var operator = this.innerHTML;
    var expression = fnum.value + operator + snum.value;
    var result = eval(expression);
    document.querySelector("#box_3").value = result;
}