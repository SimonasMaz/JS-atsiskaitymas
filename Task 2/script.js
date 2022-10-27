/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const myButton = document.getElementById("btn__element");
const output = document.getElementById("btn__state");

let count = 0;

const onClick = () => {
  output.textContent = count += 1;
};

myButton.addEventListener("click", onClick);
