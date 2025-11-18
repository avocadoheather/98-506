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
    for(let i = positions.length - 1; i >= 0; i--) {
        const { x, y, time } = positions[i];
        const timeSincePoint = currentTime - time;

        if(timeSincePoint > TIME_BEFORE_DISAPPEAR) {
            index = i;
            break;
        }

        c.beginPath();
        const opacity = 1 - timeSincePoint / TIME_BEFORE_DISAPPEAR;
        c.fillStyle = `hsla(${i}, 50%, 50%, ${opacity})`;
        c.arc(x, y, opacity*5, 0, 2*Math.PI);
        c.fill();
    }

    // If slicing part of the array, do it here
    if(index !== null) {
        positions.slice(-index);
    }
    
    // Turn this into an animation!
    requestAnimationFrame(drawPos);
}

// Set drawPos to run as an animation!
requestAnimationFrame(drawPos);
