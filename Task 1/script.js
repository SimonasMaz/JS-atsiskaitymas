/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById("output");
const target = document.getElementById("search");

document.getElementById("submit-btn").addEventListener("click", e => {
  e.preventDefault();
  const kgValue = target.value;

  if (kgValue) {
    const lb = (kgValue * 2.2046).toFixed(2);
    const g = (kgValue / 0.001).toFixed(2);
    const oz = (kgValue * 35.274).toFixed(2);
    output.innerText =
      "Pounds = " +
      lb +
      "lb || " +
      "Grams = " +
      g +
      "g || " +
      "Ounces = " +
      oz +
      "oz";
    output.style.textAlign = "center";
    output.style.margin = "50px";
    output.style.fontSize = "1.1em";
  } else {
    output.innerText = "";
  }
});
