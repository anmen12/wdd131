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
    shortDescription: "Black and smaller white to yellowish bands. 3-4ft long",
  },
  {
    snakeName: "Mojave Rattlesnake",
    imagePath:
    "images/mojave-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "Greenish tint with diamond shapes. 3-4ft long",
  },
  {
    snakeName: "Northern Rubber Boa",
    imagePath:
    "images/northern-rubber-boa.webp",
    isVenomous: false,
    shortDescription: "Dark brown to olive color. 1.5-2ft long",
  },
  {
    snakeName: "Northern Ring Necked Snake",
    imagePath:
    "images/northern-ring-necked-snake.webp",
    isVenomous: false,
    shortDescription: "Grey with vibrant orange underside. 1-1.5ft long",
  },
  {
    snakeName: "Southwestern Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
    shortDescription: "Pale brownish peach color with diamond shapes. 3ft long",
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

function recordVisit() {
    let visits = JSON.parse(localStorage.getItem("numberOfVists"));

    visits++
    const numberOfVisits = document.querySelector("#visits");
    numberOfVisits.innerHTML = `<span class="label">Visits: </span>${visits}`;

    localStorage.setItem("numberOfVists", JSON.stringify(visits));
}

recordVisit();

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;