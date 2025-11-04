// Showing event handlers
document.getElementById("btn").addEventListener("click", () => {
    console.log("Clicked!");
});

// This stops default <a> behavior
document.querySelector("a").addEventListener("click", (evt) => {
    evt.preventDefault();
});
