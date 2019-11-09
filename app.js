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


//Second of all, lets show to user that all orange squares accepts dropping by colorizing with light green
var squaresDroppable = document.getElementsByClassName("square");

for (let i = 0; i < squaresDroppable.length; i++) {
    squaresDroppable[i].addEventListener("dragover", allowDrop);
}
function allowDrop(event) {    
    //making the target square droppable
    event.preventDefault();
    //making the drag and drop event doing the action of moving an element not copying it
    event.dataTransfer.dropEffect = "move";
    //making the square green so that the user understands it is droppable zone
    event.target.style.backgroundColor = "#8beea8";
}


//Third of all, lets now add the ondrop event to all squares so that they receive the draggable element
for (let i = 0; i < squaresDroppable.length; i++) {
    squaresDroppable[i].addEventListener("drop", drop);
}

function drop(ev) {
    ev.preventDefault();
    //just removeing the text that existed here before, but first we have to store it somewhere
    oldText = ev.target.innerText;
    ev.target.innerHTML = "";
    //getting the data we've stored when we started drag operation (the data is the id of the player element)
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
