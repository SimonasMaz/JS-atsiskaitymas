/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const users = async () => {
  try {
    const response = await fetch("./cars.json");
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.log(error);
  }
};
users();
function displayResults(value) {
  value.forEach(item => {
    const card = document.createElement("div");

    card.classList.add("card");

    const brand = document.createElement("h2");

    brand.textContent = item.brand;

    const models = document.createElement("p");

    models.textContent = item.models;

    card.append(brand, models);

    output.append(card);
  });
}
