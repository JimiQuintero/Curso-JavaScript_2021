const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment();

const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrio un error !!!";
      error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open(method || "GET", url);
  // Pasar Cabeceras
  xhr.setRequestHeader("Content-type", "application/json; charset= utf-8");
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  ajax({
    url: "http://localhost:5000/santos",
    success: (response) => {
      console.log(response);
      response.forEach((el) => {
        $template.querySelector(".name").textContent = el.name;
        $template.querySelector(".constellation").textContent =
          el.constellation;
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".edit").dataset.name = el.name;
        $template.querySelector(".edit").dataset.constellation =
          el.constellation;
        $template.querySelector(".delete").dataset.id = el.id;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      // Renderizar elementos en la tabla
      $table.querySelector(".crud-table tbody").appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML(
        "afterend",
        `<p style="color: red"><b>${err}</b></p>`
      );
    },
  });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      // Create - POST
      ajax({
        method: "POST",
        url: "http://localhost:5000/santos",
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML(
            "afterend",
            `<p style="color: red"><b>${err}</b></p>`
          ),
        data: {
          name: e.target.nombre.value,
          constellation: e.target.constelacion.value,
        },
      });
    } else {
      // Update - PUT
      ajax({
        method: "PUT",
        url: `http://localhost:5000/santos/${e.target.id.value}`,
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML(
            "afterend",
            `<p style="color: red"><b>${err}</b></p>`
          ),
        data: {
          name: e.target.nombre.value,
          constellation: e.target.constelacion.value,
        },
      });
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }

  if (e.target.matches(".delete")) {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id} ?`
    );

    if (isDelete) {
      // Eliminar - DELETE
      ajax({
        method: "DELETE",
        url: `http://localhost:5000/santos/${e.target.dataset.id}`,
        success: (res) => location.reload(),
        error: (err) => alert(err),
      });
    }
  }
});
