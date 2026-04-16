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
    venomType: "",
    description: "Black and smaller white to yellowish bands. 3-4ft long",
    location: "Southern Utah",
  },
  {
    snakeName: "Northern Rubber Boa",
    imagePath:
    "images/northern-rubber-boa.webp",
    isVenomous: false,
    venomType: "",
    description: "Dark brown to olive color. 1.5-2ft long",
    location: "Central Northern Utah",
  },
  {
    snakeName: "Northern Ring Necked Snake",
    imagePath:
    "images/northern-ring-necked-snake.webp",
    isVenomous: false,
    venomType: "Mild Venom. Harmless to Humans",
    description: "Grey with vibrant red underbelly. 1-1.5ft long",
    location: "Western Utah",
  }
];

function createSnakeCards(snakes) {
    snakes.forEach(snake => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let infoContainer = document.createElement("div");
        let name = document.createElement("h3");
        let iconContainer = document.createElement("div");
        let iconDescription = document.createElement("h3");
        let icon = document.createElement("img");
        let venom = document.createElement("p");
        let description = document.createElement("p");
        let location = document.createElement("p");

        img.setAttribute("src",snake.imagePath);
        img.setAttribute("alt",`${snake.snakeName}`);
        img.setAttribute("loading","lazy");

        name.innerHTML = `<span class="label">Name: </span>${snake.snakeName}`;
        infoContainer.appendChild(name);

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
        if(snake.venomType !== "") {
            venom.innerHTML = `<span class="label">Venom: </span>${snake.venomType}`;
            iconContainer.appendChild(venom);
        }
        infoContainer.appendChild(iconContainer);

        description.innerHTML = `<span class="label">Description: </span>${snake.description}`;
        infoContainer.appendChild(description);

        location.innerHTML = `<span class="label">General Location: </span>${snake.location}`;
        infoContainer.appendChild(location);

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