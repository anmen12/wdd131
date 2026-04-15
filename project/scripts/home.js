const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const snakes = [
  {
    snakeName: "Southwest Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Southwest Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Southwest Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Southwest Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "This is a short description of the snake",
  }
];

function createSnakeCards(snakes) {
    snakes.forEach(snake => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let nameMobile = document.createElement("h3");
        let img = document.createElement("img");
        let infoContainer = document.createElement("div");
        let iconContainer = document.createElement("div");
        let iconDescription = document.createElement("h3");
        let icon = document.createElement("img");
        let description = document.createElement("p");

        name.innerHTML = `Name: ${snake.snakeName}`;

        nameMobile.innerHTML = `Name: ${snake.snakeName}`;
        infoContainer.appendChild(nameMobile);

        img.setAttribute("src",snake.imagePath);
        img.setAttribute("alt",`${snake.snakeName}`);
        img.setAttribute("loading","lazy");

        iconDescription.innerHTML = `Venomous: `;
        iconContainer.appendChild(iconDescription);
        if(snake.isVenomous) {
            icon.setAttribute("src","images/venomous.svg");
            icon.setAttribute("alt","Venomous");
        }
        else {
            icon.setAttribute("src","images/not-venomous.svg");
            icon.setAttribute("alt","Not Venomous");
        }
        icon.setAttribute("loading","lazy");
        iconContainer.appendChild(icon);
        infoContainer.appendChild(iconContainer);

        description.innerHTML = `Description: ${snake.shortDescription}`;
        infoContainer.appendChild(description);

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(infoContainer);

        document.querySelector(".snakes").appendChild(card);
    });
}

createSnakeCards(snakes);

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;