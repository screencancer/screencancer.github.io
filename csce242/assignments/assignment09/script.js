class Pizza {
  constructor(title, image, description, ingredients, sauce, cheese, price) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    this.sauce = sauce;
    this.cheese = cheese;
  }

  get item() {
    const pizzaSection = document.createElement("section");
    pizzaSection.classList.add("pizza");

    const heading = document.createElement("h3");
    heading.textContent = this.title;
    pizzaSection.appendChild(heading);

    pizzaSection.appendChild(this.picture(this.image));
    pizzaSection.onclick = () => {
      console.log(this.image);
      document.getElementById("id01").style.display = "block";
      let modalHeader = document.getElementById("modal-header");
      const head = document.createElement("h2");
      head.textContent = this.title;
      modalHeader.appendChild(head);

      let modalContent = document.getElementById("popup-content");
      modalContent.style.display = "flex";
      modalContent.style.justifyContent = "space-between";

      const listDescriptionSection = document.createElement("section");
      const listDescription = document.createElement("ul");
      listDescriptionSection.appendChild(listDescription);
      modalContent.appendChild(listDescriptionSection);
      listDescription.append(this.listItem(`Ingredients: ${this.ingredients}`));
      listDescription.append(this.listItem(`Sauce: ${this.sauce}`));
      listDescription.append(this.listItem(`Cheese: ${this.cheese}`));
      listDescription.append(this.listItem(`Price: $${this.price}`));

      const imgSection = document.createElement("section");
      imgSection.appendChild(this.picture(this.image));
      modalContent.appendChild(imgSection);
      closeButton.addEventListener("click", () => {
        document.getElementById("id01").style.display = "none";
        head.remove();
        imgSection.remove();
        listDescriptionSection.remove();
      });
    };
    return pizzaSection;
  }

  listItem(info) {
    const li = document.createElement("li");
    li.innerText = info;
    return li;
  }

  picture(src) {
    const pic = document.createElement("img");
    pic.src = "images/" + src;
    return pic;
  }
}

const closeButton = document.getElementById("close");

window.onload = () => {
  let pizza = [];
  let pizzaDisplay = document.getElementById("Pizzas");

  pizza.push(
    new Pizza(
      "Margherita",
      "../images/margherita-pizza-4.webp",
      "Simple classic with fresh tomatoes and basil",
      "tomato, basil, mozzarella",
      "tomato sauce",
      "mozzarella",
      12.99
    )
  );

  pizza.push(
    new Pizza(
      "Pepperoni",
      "../images/pepperoni.jpg",
      "Crowd-pleasing pepperoni pizza",
      "pepperoni",
      "tomato sauce",
      "mozzarella",
      14.99
    )
  );

  pizza.push(
    new Pizza(
      "Hawaiian",
      "../images/delicious-pineapple-pizza.jpg",
      "Sweet and savory ham with pineapple",
      "ham, pineapple",
      "tomato sauce",
      "mozzarella",
      13.99
    )
  );

  pizza.push(
    new Pizza(
      "Veggie",
      "../images/delicious-veggie-pizza.jpg",
      "Loaded with fresh vegetables",
      "mushrooms, onions, bell peppers",
      "tomato sauce",
      "mozzarella",
      12.99
    )
  );

  pizza.push(
    new Pizza(
      "Meat Lovers",
      "../images/meatlover.webp",
      "Packed with savory meats",
      "sausage, bacon, pepperoni",
      "tomato sauce",
      "mozzarella",
      15.99
    )
  );
  for (let i in pizza) {
    pizzaDisplay.append(pizza[i].item);
  }
};
