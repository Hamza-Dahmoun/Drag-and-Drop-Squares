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
}


//Third of all, lets now add the ondrop event to all squares so that they receive the draggable element
for (let i = 0; i < squaresDroppable.length; i++) {
    squaresDroppable[i].addEventListener("drop", drop);
}

function drop(ev) {
    ev.preventDefault();    
    
    //getting the data we've stored when we started drag operation (the data is the id of the player element)
    var data = ev.dataTransfer.getData("text");
    //now move the draggable element to the new parent (new droppable element)
    ev.target.appendChild(document.getElementById(data));    
}


//From Mozilla Developer Page:
//By default, the browser prevents anything from happening when dropping something onto most HTML elements.
//To change that behavior so that an element becomes a drop zone or is droppable,
//the element must have both ondragover and ondrop event handler attributes.