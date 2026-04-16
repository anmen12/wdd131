const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const snakes = [
  {
    snakeName: "California Kingsnake",
    scientificName: "Lampropeltis californiae",
    imagePath:
    "images/california-kingsnake.webp",
    isVenomous: false,
    venomType: "",
    description: "A body with black bands and smaller white to yellowish white bands. 3 to 4 feet in length",
    location: "Southern Utah",
  },
  {
    snakeName: "Northern Rubber Boa",
    scientificName: "Charina bottae",
    imagePath:
    "images/northern-rubber-boa.webp",
    isVenomous: false,
    venomType: "",
    description: "A thicker body of dark brown to tan or olive green with small looking eyes. 1.5 to 2 feet in length",
    location: "Central and Northern Utah",
  },
  {
    snakeName: "Northern Ring Necked Snake",
    scientificName: "Diadophis punctatus regalis",
    imagePath:
    "images/northern-ring-necked-snake.webp",
    isVenomous: false,
    venomType: "Mild Venom. Harmless to Humans",
    description: "A grey body with a yellow to orange underside qith black specks, and the tail's underside is red. 1 to 1.5 feet in length",
    location: "Western Utah",
  },
  {
    snakeName: "Western Smooth Greensnake",
    scientificName: "Opheodrys vernalis blanchardi",
    imagePath:
    "images/western-smooth-greensnake.webp",
    isVenomous: false,
    venomType: "",
    description: "A smooth vibrant green body with a more yellow or lime underside. Around 1.5 feet in length",
    location: "Central Northwest and Southwest Utah",
  },
  {
    snakeName: "Valley Garter Snake",
    scientificName: "Thamnophis sirtalis fitchi",
    imagePath:
    "images/valley-garter-snake.webp",
    isVenomous: false,
    venomType: "Mild Venom. Harmless to Humans",
    description: "A brown or black body with a yellow stripe on the top and a yellow underside. 2 to 3 feet in length",
    location: "Northern Central Utah",
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

        iconDescription.innerHTML = `Non-Venomous`;
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