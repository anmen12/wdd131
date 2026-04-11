const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function createProducts(products) {
    products.forEach(product => {
        let option = document.createElement("option");

        option.textContent = product.name;
        option.setAttribute("value", product.id);

        document.querySelector("#products").appendChild(option);
    });
}

createProducts(products);

function recordVisit() {
    let visits = JSON.parse(localStorage.getItem("numberOfVists"));

    visits++

    localStorage.setItem("numberOfVists", JSON.stringify(visits));
}

recordVisit();