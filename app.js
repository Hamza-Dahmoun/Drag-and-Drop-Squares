//First of all lets make the plyer square element draggable
document.getElementById("player").setAttribute("draggable", true);

//Now lets specify what should happen when the player square is dragged by adding ondragstart event
document.getElementById("player").addEventListener("dragstart", make_playerRed_andCircle);

function make_playerRed_andCircle(event){
    event.target.style.backgroundColor = "red";
    event.target.style.borderRadius = "50%";
}

//Second of all, lets show to user that all orange squares accepts dropping by colorizing with light green
var squaresDroppable = document.getElementsByClassName("square");
for(let i = 0; i< squaresDroppable.length; i++){
    squaresDroppable[i].addEventListener("dragover", makeSquareLightGreen);
}

function makeSquareLightGreen(event){
    event.target.style.backgroundColor = "#A9F5BC";
}
