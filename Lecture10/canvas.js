// HTML5 canvas stuff!

const elem = document.getElementById("canvas");
const c = elem.getContext("2d");
elem.width = elem.getBoundingClientRect().width;
elem.height = elem.getBoundingClientRect().height;

const TIME_BEFORE_DISAPPEAR = 1500;

// Draw stuff here!
let positions = [];

// Add a mousemove listener where we get the mouse's position
// + a timestamp of when this happens
elem.addEventListener("mousemove", evt => {
    const { offsetX, offsetY } = evt;
    const time = new Date().getTime();

    positions.push({
        x: offsetX,
        y: offsetY,
        time
    });
})

// Add an animation function where we draw positions
const drawPos = () => {
    // Clear out the canvas beforehand
    c.clearRect(0, 0, elem.width, elem.height);

    // Get the current timestamp
    const currentTime = new Date().getTime();

    // Get the index of where to break off positions
    let index = null;

    /* Draw circles at each position, iterating backwards
        a) at each one, compare the current time to the timestamp
        b) if it's more than TIME_BEFORE_DISAPPEARING, break
       Draw with color hue based on index
    */

    // If slicing part of the array, do it here
    
    // Turn this into an animation!
    requestAnimationFrame(drawPos);
}

// Set drawPos to run as an animation!