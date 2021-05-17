const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let response = await axios.get("http://localhost:5000/santos"),
      json = await response.data;
    console.log(response, json);

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.name;
      $template.querySelector(".constellation").textContent = el.constellation;
      $template.querySelector(".edit").dataset.id = el.id;
      $template.querySelector(".edit").dataset.name = el.name;
      $template.querySelector(".edit").dataset.constellation = el.constellation;
      $template.querySelector(".delete").dataset.id = el.id;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } catch (error) {
    let message = error.statusText || "Ocurrio un error !!!";
    //console.log(error);
    $table.insertAdjacentHTML(
      "afterend",
      `<p style= "color: red"><b>Error ${error.response.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);

// Metodo Crear (POST) y actualizar (PUT)
d.addEventListener("submit", async (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create POST 
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset= utf-8",
            },
            data: JSON.stringify({
              name: e.target.name.value,
              constellation: e.target.constellation.value,
            })
          },
          response = await axios(
            "http://localhost:5000/santos",
            options
          ),
          json = response.data;

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error !!";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    } else {
      // Update PUT 
      try {
        let options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json; charset= utf-8",
            },
            data: JSON.stringify({
              name: e.target.name.value,
              constellation: e.target.constellation.value,
            })
          },
          response = await axios(`http://localhost:5000/santos/${e.target.id.value}`, options),
          json = response.data;

        location.reload();

      } catch (err) {
        let message = err.statusText || "Ocurrio un error !!";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
})


d.addEventListener("click", async (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.name.value = e.target.dataset.name;
    $form.constellation.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }


  if (e.target.matches(".delete")) {
    let isDelete = confirm(`Estas seguro de eliminar el id ${e.target.dataset.id}`)
    if (isDelete) {
      try {
        let options = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json; charset= utf-8",
            },
          },
          response = await axios(
            `http://localhost:5000/santos/${e.target.dataset.id}`,
            options
          ),
          json = response.data;

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error !!";
        $form.insertAdjacentHTML(
          "afterend",
          `<p style="color: red"><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }

});