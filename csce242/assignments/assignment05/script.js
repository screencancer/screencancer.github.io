document.getElementById("hello-button").onclick = () => {
    const div = document.getElementById("hello-button");
    console.log("test")
    div.insertAdjacentHTML("beforeend", "<h3>hello</h3>")
}

document.getElementById("color-picker").onchange = () => {
    const star = document.getElementById("star");
    console.log(document.getElementById("color-picker").value);
    star.style.color = document.getElementById("color-picker").value;
}

document.getElementById("imgbtn").onclick = () => {
    const img = document.getElementById("imgbtn")
    img.src = "./images/909090.png"
}