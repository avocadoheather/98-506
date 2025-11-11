// HTML5 canvas stuff!

const elem = document.getElementById("canvas");
const c = elem.getContext("2d");
elem.width = elem.getBoundingClientRect().width;
elem.height = elem.getBoundingClientRect().height;

const TIME_BEFORE_DISAPPEAR = 1000;

// Draw stuff here!
let positions = [];
elem.addEventListener("mousemove", (evt) => {
    const { offsetX: x, offsetY: y } = evt;

    positions.push({ x, y, time: new Date().getTime() });
})

const drawPos = () => {
    c.clearRect(0, 0, elem.width, elem.width);
    const currentDate = new Date().getTime();
    let breakOff = -1;
    for(let i = positions.length - 1; i >= 0; i--) {
        const subOpacity = (currentDate - positions[i].time) / TIME_BEFORE_DISAPPEAR;
        if (subOpacity > 1) {
            breakOff = i;
            break;
        }
        const opacity = 1 - subOpacity;
        c.beginPath();
        c.fillStyle = `hsla(${i + 50}, 75%, 75%, ${opacity})`;
        c.arc(positions[i].x, positions[i].y, opacity*5, 0, 2*Math.PI);
        c.fill();
    }
    if (breakOff !== -1) {
        positions.slice(-breakOff);
    }
    requestAnimationFrame(drawPos);
}

requestAnimationFrame(drawPos);