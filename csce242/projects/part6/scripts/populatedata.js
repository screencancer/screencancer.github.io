/* const documentName = location.pathname.split("/");

page = documentName.at((documentName.length) - 2)

pages = ["plans", "home"]

console.log(page)
switch(page){
    case "plans":
        console.log("on page")
    case "home":
        console.log("on home", page)
}
     */

const planRow = document.getElementById("plan-row");
const getData = async () => {
    const jsonUrl = "https://screencancer.github.io/csce242/projects/part6/data/cards.json";

    try {
        const response = await fetch(jsonUrl);
        console.log(response);
        return await(response.json());
    } catch (error) {
        console.log(error);
    }
}

const setData = async () => {
    let cards = await getData();
    cards.forEach((card) => {
        console.log(card);
        getCard(card);
    });
}

const getCard = (card) => {
    let plan = document.createElement("div");
    plan.className = "plan";

    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let innercardDiv = document.createElement("div");
    innercardDiv.className = "inner-card";

    let lastModified = document.createElement("h3");
    lastModified.textContent = "Last Modified " + card.modified_date;

    let cardNum = document.createElement("h3");
    cardNum.textContent = card.num_cards + " Cards";

    let categoryNum = document.createElement("h3");
    categoryNum.textContent = card.num_categories + " Categories";

    let percentDone = document.createElement("h3");
    percentDone.textContent = card.percent_done + " Done";

    let img = document.createElement("img");
    img.src = card.image_source;

    innercardDiv.append(cardNum, categoryNum, percentDone, lastModified);
    cardDiv.append(img);
    cardDiv.append(innercardDiv)
    

    let title = document.createElement("h3");
    title.innerText = card.title;

    plan.append(cardDiv);
    plan.append(title);
    planRow.append(plan);
}

window.onload = () => setData();