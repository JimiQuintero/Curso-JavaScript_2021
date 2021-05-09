const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let response = await fetch("http://localhost:5000/santos"),
      json = await response.json();
    //console.log(response, json);
    if (!response.ok)
      throw {
        status: response.status,
        statusText: response.statusText,
      };

    json.forEach((el) => {
      $template.querySelector(".name").textContent = el.name;
      $template.querySelector(".constellation").textContent = el.constellation;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    // Renedrizado de elementos en la tabla
    $table.querySelector("tbody").appendChild($fragment);
  } catch (error) {
    let message = error.statusText || "Ocurrio un error !!";
    $table.insertAdjacentHTML(
      "afterend",
      `<p style="color: red"><b>Error ${error.status}: ${message}</b></p>`
    );
  }
};

d.addEventListener("DOMContentLoaded", getAll);
