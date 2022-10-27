/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.getElementById("btn").addEventListener("click", () => {
  const users = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      pushResults(data);
    } catch (error) {
      console.log(error);
    }
  };
  users();
});

const pushResults = element => {
  element.forEach(item => {
    const avatar = document.createElement("img");
    avatar.src = item.avatar_url;
    avatar.style.width = "150px";

    const login = document.createElement("h3");
    login.textContent = item.login;

    output.append(avatar, login);
  });
};
