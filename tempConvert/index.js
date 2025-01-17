const tempInput = document.getElementById("tempInput");
const fahrenToCel = document.getElementById("fahrenToCel");
const celtoFahren = document.getElementById("celtoFahren");
const finalTemp = document.getElementById("finalTemp");
let temp = 0;

function convert() {
  if (fahrenToCel.checked) {
    temp = Number(tempInput.value);
    temp = Math.floor(((temp - 32) * 5) / 9);
    finalTemp.textContent = temp + "°C";
    console.log(temp);
  }
  if (celtoFahren.checked) {
    temp = Number(tempInput.value);
    temp = Math.floor((temp * 9) / 5 + 32);
    finalTemp.textContent = temp + "°F";
    console.log(temp);
  }
}
