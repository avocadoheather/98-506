// Let's create a basic todo list!

// This creates the element we render in the DOM:
// (Incomplete, we'll fill this out together!)
const addElement = (todoName) => {
    // Get the element where we hold all todo elements:
    const elem = document.getElementById("todo");

    // Create an element for our item
    // see the sample element; it will have
    // a class "item", and within it a checkbox and
    // the todo list name.
    let item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `<input type="checkbox" />${todoName}`;

    // Add our todo to our DOM:
    elem.appendChild(item);
}

const addTodo = () => {
    // Get todo-name's content
    const todoName = document.getElementById("todo-name").value;

    // Add it to the todo list!
    addElement(todoName);

    document.getElementById("todo-name").value = "";
}

// Listen for when we press add-elem to add to our todo list:
document.getElementById("add-elem").addEventListener("click", addTodo);
document.getElementById("todo-name").addEventListener("keydown", (evt) => {
    if(evt.key == "Enter") {
        addTodo();
    }
});