const menuButton = document.querySelector(".menu-button");
const menu = document.getElementById("menu");
const arrow = document.querySelector(".arrow");
const travel = document.getElementById("travel");
const color = document.getElementById("color");
const transportInput = document.getElementById("transportation-input");

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("show");
  arrow.classList.toggle("up");
  arrow.classList.toggle("down");
});

document.querySelectorAll(".menu-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(`Exercise ${index + 1} clicked`);
    if (index == 0) {
      color.classList.add("hidden");
      travel.classList.remove("hidden");
    } else {
      travel.classList.add("hidden");
      color.classList.remove("hidden");
    }
  });
});

document.querySelectorAll(".color-buttons").forEach((item, index) => {
  item.addEventListener("click", (event) => {
    console.log(`Color ${index + 1} clicked`);
    let color = event.target.innerHTML.toLowerCase().trim();
    let heart = document.getElementById("heart");
    heart.style.color = color;
  });
});

transportInput.addEventListener("keyup", (event) => {
  let transportMethod = transportInput.value.toLowerCase();
  let img = document.getElementById("transport-img");
  console.log(transportMethod);
  switch (transportMethod) {
    case "car":
      img.src = "./images/car.jpg";
      break;
    case "bike":
      img.src = "./images/bike.jpg";
      break;
    case "scooter":
      img.src = "./images/scooter.jpg";
      break;
    case "skateboard":
      img.src = "./images/skateboard.png";
      break;
    default:
      img.src = "";
      break;
  }
});
