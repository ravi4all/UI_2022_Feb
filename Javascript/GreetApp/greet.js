// Event Binding - binding an event with some function

// window.addEventListener("load", function() {
//     console.log("Window Loaded with JS...");
//     document.getElementById("btn").addEventListener("click", greet);
// });

window.addEventListener("load", initEvents);

function initEvents() {
    console.log("Event Binding...");
    document.getElementById("btn").addEventListener("click", greet);
}

function greet() {
    console.log("Greet Called...");
    var textbox = document.getElementById("box_1");
    var username = textbox.value;
    document.getElementById("output").innerHTML = username;
}