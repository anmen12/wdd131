const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const snakes = [
  {
    snakeName: "Mojave Rattlesnake",
    scientificName: "Crotalus scutulatus scutulatus",
    imagePath:
    "images/mojave-rattlesnake.webp",
    isVenomous: true,
    venomType: "Hemotoxins and Neurotoxins. Highly Dangerous",
    description: "A large yellowish grey body sometimes with a greenish tint with diamond shaped blotches along its body. 3 to 4 feet in length",
    location: "South West Utah",
  },
  {
    snakeName: "Prairie Rattlesnake",
    scientificName: "Crotalus viridis",
    imagePath:
    "images/prairie-rattlesnake.webp",
    isVenomous: true,
    venomType: "Hemotoxins. Dangerous",
    description: "A large yellowish grey body sometimes with a olive tint with diamond shaped blotches along its body. 3 to 4 feet in length",
    location: "South East Utah",
  },
  {
    snakeName: "Southwestern Speckled Rattlesnake",
    scientificName: "Crotalus pyrrhus",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    venomType: "Hemotoxins. Dangerous",
    description: "A large pale brownish peach color with diamond shaped blotches aling it's body. Around 3 feet in length",
    location: "South West Utah",
  }
];

function createSnakeCards(snakes) {
    snakes.forEach(snake => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let infoContainer = document.createElement("div");
        let name = document.createElement("h2");
        let scientificName = document.createElement("h3");
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

        scientificName.innerHTML = `<span class="label">Scientific Name: </span>${snake.scientificName}`;
        infoContainer.appendChild(scientificName);

        iconDescription.innerHTML = `Venomous`;
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