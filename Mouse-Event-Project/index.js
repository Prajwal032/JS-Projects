const xPosEl = document.getElementById("xPos")
const yPosEl = document.getElementById("yPos")

document.addEventListener("mousemove",getPos)

function getPos(event){
    const xPos = event.clientX;
    const yPos = event.clientY;
    xPosEl.innerText =xPos; 
    yPosEl.innerText =yPos; 
}