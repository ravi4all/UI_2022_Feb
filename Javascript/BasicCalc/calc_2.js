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
    if(operator == "+") {
        var result = parseInt(fnum.value) + parseInt(snum.value);
    }
    else if(operator == "-") {
        var result = parseInt(fnum.value) - parseInt(snum.value);
    }
    else if(operator == "/") {
        var result = parseInt(fnum.value) / parseInt(snum.value);
    }
    else {
        var result = parseInt(fnum.value) * parseInt(snum.value);
    }
    
    document.querySelector("#box_3").value = result;
}