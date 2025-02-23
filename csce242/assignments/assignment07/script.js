const stairsButton = document.getElementById("draw-stairs")
const stairs = document.getElementById("stairs")
const stairsContainer = document.getElementById("stairs-container")
const climbButton = 0;

function DrawStairs(){
    const person = document.getElementById("person")
    for (let index = 0; index < 10; index++) {
        const newNode = document.createElement("img");
        newNode.src = "images/TransparentLadder.png";
        newNode.className = "stair";
        stairs.append(newNode);
    };
    person.src = "images/left.png";
    const newBtn = document.createElement("button");
    newBtn.textContent = "Climb Stairs";
    newBtn.id = "climb";
    newBtn.setAttribute("onclick", "climbStairs()");
    stairsContainer.append(newBtn);
};

function climbStairs(){
    const person = document.getElementById("person");
    let stairHeight = 130;
    let stairAmount = (stairs.offsetHeight / 130)
    let counter = 0;
    let climbInterval = setInterval(()=>{
        if(counter < stairAmount){
            if(counter % 2 == 0){
                person.src = "images/left.png";
            } else {
                person.src = "images/right.png";
            }
            person.style.bottom = `${counter * stairHeight}px`;
            counter++;
        } else {
            clearInterval(climbInterval);
        }
    } ,500)
}

