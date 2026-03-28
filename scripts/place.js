const windChill = document.querySelector("#windchill");
const windSpeed = 40;
const temperature = 4;

function calculateWindChill(windSpeed, temperature) {
    if(temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
    }
    else{
        return "N/A";
    }
}

windChill.textContent = calculateWindChill(windSpeed, temperature).toFixed(1);

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `<span style="color:lightgray">Last Modification: ${document.lastModified}</span>`;