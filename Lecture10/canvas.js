// HTML5 canvas stuff!

const elem = document.getElementById("canvas");
const c = elem.getContext("2d");
elem.width = elem.getBoundingClientRect().width;
elem.height = elem.getBoundingClientRect().height;

const TIME_BEFORE_DISAPPEAR = 1000;

// Draw stuff here!
let positions = [];

// Add a mousemove listener where we get the mouse's position
// + a timestamp of when this happens

// Add an animation function where we draw positions
const drawPos = () => {
    // Clear out the canvas beforehand

    // Get the current timestamp

    // Get the index of where to break off positions

    /* Draw circles at each position, iterating backwards
        a) at each one, compare the current time to the timestamp
        b) if it's more than TIME_BEFORE_DISAPPEARING, break
       Draw with color hue based on index
    */

    // If slicing part of the array, do it here
    
    // Turn this into an animation!
}

// Set drawPos to run as an animation!