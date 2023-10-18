//Seleccionar boton para activar el listado de la pokeAPI:
const apiButton = document.querySelector(".pokeButton");

//Al boton ponerle un escuchador de eventos que se activo al clickear y llame a una function
apiButton.addEventListener("click", traerAPI);

function traerAPI() {
  //Numero pokemon total por las nueve generaciones
  let numGeneraciones1 = 151;
  let contador1 = 1;

  let numGeneraciones2 = 100;
  let contador2 = 152;

  let numGeneraciones3 = 135;
  let contador3 = 252;

  let numGeneraciones4 = 107;
  let contador4 = 387;

  let numGeneraciones5 = 156;
  let contador5 = 494;

  let numGeneraciones6 = 72;
  let contador6 = 650;

  let numGeneraciones7 = 88;
  let contador7 = 722;

  let numGeneraciones8 = 96;
  let contador8 = 810;

  let numGeneraciones9 = 116;
  let contador9 = 906;

  for (let i = 1; i <= numGeneraciones1; i++) {
    const tabla = document.querySelector(".poke-datos-1");
    tabla.innerHTML = ""; //Limpia la tabla antes de agregar nuevos datos

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);
        //console.log(datos);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla.innerHTML += `
                <td>${contador1}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
              `;
            contador1++;

            tabla2.innerHTML += `
                <td>${contador2}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador2++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones2; i++) {
    const tabla2 = document.querySelector(".poke-datos-2");
    tabla2.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla2.innerHTML += `
                <td>${contador2}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador2++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones3; i++) {
    const tabla3 = document.querySelector(".poke-datos-3");
    tabla3.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla3.innerHTML += `
                <td>${contador3}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador3++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones4; i++) {
    const tabla4 = document.querySelector(".poke-datos-4");
    tabla4.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla4.innerHTML += `
                <td>${contador4}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador4++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones5; i++) {
    const tabla5 = document.querySelector(".poke-datos-5");
    tabla5.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla5.innerHTML += `
                <td>${contador5}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador5++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones6; i++) {
    const tabla6 = document.querySelector(".poke-datos-6");
    tabla6.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla6.innerHTML += `
                <td>${contador6}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador6++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones7; i++) {
    const tabla7 = document.querySelector(".poke-datos-7");
    tabla7.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla7.innerHTML += `
                <td>${contador7}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador7++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones8; i++) {
    const tabla8 = document.querySelector(".poke-datos-8");
    tabla8.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla8.innerHTML += `
                <td>${contador8}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador8++;
          }
        }
      }
    };
    api.send();
  }

  for (let i = 1; i <= numGeneraciones9; i++) {
    const tabla9 = document.querySelector(".poke-datos-9");
    tabla9.innerHTML = "";

    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const api = new XMLHttpRequest();
    api.open("GET", urlAPI, true);

    api.onreadystatechange = function () {
      if (api.status == 200 && api.readyState == 4) {
        let datos = JSON.parse(api.responseText);

        for (let item in datos.sprites) {
          if (item == "front_default") {
            tabla9.innerHTML += `
                <td>${contador9}</td>
                <td>${datos.name}</td>
                <td><img id="poke-foto" src="${datos.sprites[item]}" alt="${datos.name}"></td>
            `;
            contador9++;
          }
        }
      }
    };
    api.send();
  }

}