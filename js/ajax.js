// Funcion anonima autoejecutable 

// *********** 106 Objeto XMLHttpRequest ******************
(() => {
  const xhr = new XMLHttpRequest(),
       $xhr = document.getElementById("xhr"),
       $fragment = document.createDocumentFragment();
  // console.log(xhr);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    
    // console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      // console.log("exito");
      // console.log(xhr.responseText);
      // $xhr.innerHTML = xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      // console.log(json);

      json.forEach( el => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });

        $xhr.appendChild($fragment);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un Error";
      $xhr.innerHTML = `Error ${xhr.status} : ${message}`;
    }

    // Si necesito cargar un loader u otro mensaje se ejecuta de igual manera
    // console.log("Esté mensaje cargará de cualqueir forma");

  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // Si cargo el archivo desde mi misma app 
  // xhr.open("GET", "img/assets/uses.json");


  xhr.send();

})();

// *********** 107 API Fetch ******************

(() => {
  const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    // .then(resp => {
    //   // console.log(resp);
    //   return resp.ok ? resp.json() : Promise.reject(resp);
    // })
    .then( (resp) => resp.ok ? resp.json() : Promise.reject(resp))
    .then(json => {
      // console.log(json);
       // $fetch.innerHTML = json;
      json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
     
      })
    .catch(err => {
      // console.log( "Estamos en el catch", err);
      let message = err.statusText || " Ocurrio un Error !!!";
      $fetch.innerHTML = `Error ${err.status} : ${message}`; 
     })
    .finally(() => {
      // console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch");
    })
  })
();

// *********** 108 API Fetch + Asunc-Await ******************

(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
      $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users"),
          json = await response.json();
      // console.log(response, json);
      // if (!response.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!response.ok) throw {
         status: response.status,
         statusText: response.statusText
      }
      

      json.forEach(element => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (error) {
      // console.log("Estoy en el catch", error);
      let message = error.statusText || " Ocurrio un Error !!!";
      $fetchAsync.innerHTML = `Error ${error.status} : ${message}`; 
      
    } finally {
      // console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch");
    }
    
  }

  getData();

})
();

// ******************** 109 AJAX: Libreria AXIOS **********************

(() => {
  const $axios = document.getElementById("axios"),
     $fragment = document.createDocumentFragment();

// Acceso desde un archivo json en mi propia app 
//axios.get("img/assets/users.json")
axios.get("https://jsonplaceholder.typicode.com/users")

  .then((response) => {
    // console.log(response);
    let json = response.data;
    json.forEach(element => {
      const $li = document.createElement("li");
      $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
      $fragment.appendChild($li);
    });
    $axios.appendChild($fragment);
  }).catch((err) => {
    // console.log("Estamos en el catch", err.response);
    let message = err.response.statusText || " Ocurrio un Error !!!";
    $axios.innerHTML = `Error ${err.response.status} : ${message}`; 
  })
  .finally(() => {
    // console.log("Esto se ejecutara independientemente del resultado del Axios");
  })
})();

// **************** 110 AJAX: Libreria AXIOS + Async-Await ***********************

(() => {
  const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/users"),
          json = await response.data;
      console.log(response, json);

      json.forEach( el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      // console.log("Estamos en el catch", err.response);
    let message = err.response.statusText || " Ocurrio un Error !!!";
    $axiosAsync.innerHTML = `Error ${err.response.status} : ${message}`; 
    }finally {
       console.log("Esto se ejecutara independientemente del resultado del try....catch de Axios");
    }
  }
  getData();
})
();

