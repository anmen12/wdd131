const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const snakes = [
  {
    snakeName: "California Kingsnake",
    imagePath:
    "images/california-kingsnake.webp",
    isVenomous: false,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Mojave Rattlesnake",
    imagePath:
    "images/mojave-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Northern Rubber Boa",
    imagePath:
    "images/northern-rubber-boa.webp",
    isVenomous: false,
    shortDescription: "This is a short description of the snake",
  },
  {
    snakeName: "Ring Necked Snake",
    imagePath:
    "images/ring-necked-snake.webp",
    isVenomous: false,
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

        img.setAttribute("src",snake.imagePath);
        img.setAttribute("alt",`${snake.snakeName}`);
        img.setAttribute("loading","lazy");

        iconDescription.innerHTML = `Venomous: `;
        iconContainer.appendChild(iconDescription);
        if(snake.isVenomous) {
            name.innerHTML = `<a href="venomous.html">${snake.snakeName}</a>`;
            icon.setAttribute("src","images/venomous.svg");
            icon.setAttribute("alt","Venomous");
        }
        else {
            name.innerHTML = `<a href="non-venomous.html">${snake.snakeName}</a>`;
            icon.setAttribute("src","images/not-venomous.svg");
            icon.setAttribute("alt","Not Venomous");
        }
        nameMobile.innerHTML = name.innerHTML;
        icon.setAttribute("loading","lazy");
        infoContainer.appendChild(nameMobile);
        iconContainer.appendChild(icon);
        infoContainer.appendChild(iconContainer);

        description.innerHTML = `${snake.shortDescription}`;
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