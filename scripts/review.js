const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;

function recordVisit() {
    let visits = JSON.parse(localStorage.getItem("numberOfVists"));

    visits++

    localStorage.setItem("numberOfVists", JSON.stringify(visits));
}

recordVisit();