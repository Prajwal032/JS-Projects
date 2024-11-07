const imageContainer = document.querySelector(".image-container");

const btn = document.querySelector(".btn");
let imageNum = 10;
btn.addEventListener("click", function () {
  console.log("clicked");
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    imageContainer.appendChild(newImg);
  }
}
