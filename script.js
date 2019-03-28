
// WE WANT SELECT "INPUT WINDOW" AND "ENTER BUTTON"

// Cache our selectors
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Function to measure the length of our input
function inputLength() {
    return input.value.length;
}

// Function to create a list element and add it at the end of the current list
function createListElement() {
    // Create a new element in the list
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    // Append a button to our list element
    var newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("X"));

    // Create a new division to insert inside of our list
    var newDiv = document.createElement("div");
    newDiv.classList.add("listitem");
    newDiv.appendChild(li);
    newDiv.appendChild(newButton);
    ul.appendChild(newDiv);

    // Reset the text field
    input.value = "";
}

// Function that performs the list element creation based on click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Function that performs the list element creation based on enter press
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Function that scratch off/on an item of the list
function itemDone(event) {
    if (event.target.nodeName === "LI") {
        event.target.classList.toggle("done");
    }
}

// Function to delete an item of the list after clicking on the delete button
function deleteItem(event) {
    if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();
    }
}

// Function to trigger both itemDone and deleteItem when a click occurs inside of the unordered list (which has button and list elements nested)
function itemInteract(event) {
    itemDone(event);
    deleteItem(event);
}

// Click event on button to add list item
button.addEventListener("click", addListAfterClick);
// Enter event on text field to add list item
input.addEventListener("keypress", addListAfterKeypress);
// Click event on list to be able to scratch off/on items of the list or delete items
ul.addEventListener("click", itemInteract);