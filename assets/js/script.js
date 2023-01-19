document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of button) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        })
    }
})



function runGame() {

}
function checkAnswer(){

}
function calculatecurrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function dissplayMultiplyQuestion(){

}