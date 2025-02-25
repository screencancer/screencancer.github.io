const popup = document.getElementById("popup-container");
const textContainer = document.getElementById("text-container");
const imagesArray = {
  "Happy Birthday": "images/birthday.jpg",
  "Crazy Clown": "images/clown.jpg",
  "It's Raining": "images/rain.jpg",
  "Quiet Time": "images/read.jpg",
  "Working Hard": "images/shovel.jpg",
  "Work From Home": "images/work.jpg",
};

Object.keys(imagesArray).forEach((element) => {
  const newNode = document.createElement("button");
  newNode.textContent = element;
  newNode.classList.add("buttons");
  textContainer.append(newNode);
});

document.querySelectorAll(".buttons").forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(`Button ${index + 1} clicked`);
    console.log(item.innerHTML);
    key = item.innerHTML;
    popup.classList.remove("hidden");
    const popupContent = document.createElement("div");
    popup.append(popupContent);
    const title = document.createElement("h1");
    title.textContent = key;
    popupContent.append(title);

    const img = document.createElement("img");
    img.src = imagesArray[key];
    popupContent.append(img);

    const closeBtn = document.getElementById("close-button");
    closeBtn.addEventListener("click", (event) => {
      popupContent.remove(title);
      popupContent.remove(img);
      popup.classList.add("hidden");
    });
  });
});
