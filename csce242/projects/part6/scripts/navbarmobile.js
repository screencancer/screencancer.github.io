const nav = document.getElementById("navbar")
const menuButton = document.querySelector(".menu-button");
const arrow = document.querySelector(".arrow");

let x = 0;
menuButton.addEventListener("click", (event) => {
    x++;
    if(x == 1){
        nav.style.display = "block";
        nav.style.width = "100%";
    } else {
        x = 0;
        nav.style.display = "none";
    }
  arrow.classList.toggle("up");
  arrow.classList.toggle("down");
});