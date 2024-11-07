const counterEl = document.getElementById("counter");
const barEl = document.getElementById("barFront")


let idx= 0;

updateNum();

function updateNum(){
    counterEl.innerText = `${idx}%`
    barEl.style.width= idx+"%";
    idx++
    if(idx<=100){
        setTimeout(updateNum,100)
    }
}