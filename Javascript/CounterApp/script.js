window.addEventListener("load", initEvents);
var count = 0;
function initEvents() {
    var btn_1 = document.querySelector("#inc");
    var btn_2 = document.querySelector("#dec");

    btn_1.addEventListener("click", increment);
    btn_2.addEventListener("click", decrement);
}

function increment() {
    count += 1;
    showOutput();
}

function decrement() {
    count -= 1;
    showOutput();
}

function showOutput() {
    document.querySelector("#output").innerHTML = count;
}