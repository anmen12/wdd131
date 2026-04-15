const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const emailButton = document.querySelector("#email-chosen");
const phoneButton = document.querySelector("#phone-chosen");

emailButton.addEventListener("click", function() {
    emailButton.classList.add("chosen");
    phoneButton.classList.remove("chosen");

    const infoContainer = document.querySelector("#contact-info");
    infoContainer.innerHTML = "";

    let emailLabel = document.createElement("label");
    let emailInput = document.createElement("input");

    emailLabel.innerHTML = `Email<span class="required">*</span>`;
    emailLabel.setAttribute("for", "email");

    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email")
    emailInput.setAttribute("name", "email");
    emailInput.required = true;

    infoContainer.appendChild(emailLabel);
    infoContainer.appendChild(emailInput);
});

phoneButton.addEventListener("click", function() {
    phoneButton.classList.add("chosen");
    emailButton.classList.remove("chosen");

    const infoContainer = document.querySelector("#contact-info");
    infoContainer.innerHTML = "";

    let phoneLabel = document.createElement("label");
    let phoneInput = document.createElement("input");

    phoneLabel.innerHTML = `Phone<span class="required">*</span>`;
    phoneLabel.setAttribute("for", "phone");

    phoneInput.setAttribute("type", "phone");
    phoneInput.setAttribute("id", "phone")
    phoneInput.setAttribute("name", "phone");
    phoneInput.required = true;

    infoContainer.appendChild(phoneLabel);
    infoContainer.appendChild(phoneInput);
});

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;