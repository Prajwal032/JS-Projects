const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    updateIamge();
})

function updateIamge(){
    bgImageEl.style.opacity = 1-window.pageYOffset /900;
    bgImageEl.style.backgroundSize = 160 - window.pageXOffset/12 +"%"
}