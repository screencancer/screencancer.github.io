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

const getData = async () => {
    const jsonUrl = "..\data\cards.json";

    try {
        const response = await fetch(jsonUrl);
        return await(response.json);
    } catch (error) {
        console.log(error);
    }
}

const setData = async () => {
    let cards = getData();
    console.log(cards);
}

window.onload = () => setData();