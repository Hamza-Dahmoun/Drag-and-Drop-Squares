//This variable will always hold the text that have been erased by the draggable element
var oldText="";

//First of all lets make the plyer square element draggable
document.getElementById("player").setAttribute("draggable", true);

//Now lets specify what should happen when the player square is dragged by adding ondragstart event
document.getElementById("player").addEventListener("dragstart", make_playerRed_andCircle);

function make_playerRed_andCircle(event) {
    //make it red
    event.target.style.backgroundColor = "red";
    //make it circle
    event.target.style.borderRadius = "50%";
    //store its id as a text in its data
    event.dataTransfer.setData("text", event.target.id);
}
