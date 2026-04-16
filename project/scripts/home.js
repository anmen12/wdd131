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
  },
  {
    snakeName: "Mojave Rattlesnake",
    imagePath:
    "images/mojave-rattlesnake.webp",
    isVenomous: true,
  },
  {
    snakeName: "Northern Rubber Boa",
    imagePath:
    "images/northern-rubber-boa.webp",
    isVenomous: false,
  },
  {
    snakeName: "Northern Ring Necked Snake",
    imagePath:
    "images/northern-ring-necked-snake.webp",
    isVenomous: false,
  },
  {
    snakeName: "Southwestern Speckled Rattlesnake",
    imagePath:
    "images/southwest-speckled-rattlesnake.webp",
    isVenomous: true,
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

        iconDescription.innerHTML = `Venomous`;
        if(snake.isVenomous) {
            name.innerHTML = `<a href="venomous.html">${snake.snakeName}</a>`;
            iconDescription.innerHTML = `Venomous: `;
            icon.setAttribute("src","images/venomous.svg");
            icon.setAttribute("alt","Venomous");
        }
        else {
            name.innerHTML = `<a href="non-venomous.html">${snake.snakeName}</a>`;
            iconDescription.innerHTML = `Non-Venomous`;
            icon.setAttribute("src","images/not-venomous.svg");
            icon.setAttribute("alt","Not Venomous");
        }
        icon.setAttribute("loading","lazy");

        nameMobile.innerHTML = name.innerHTML;
        
        iconContainer.appendChild(iconDescription);
        infoContainer.appendChild(nameMobile);
        iconContainer.appendChild(icon);
        infoContainer.appendChild(iconContainer);

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