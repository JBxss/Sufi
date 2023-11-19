window.addEventListener("load", function () {
  document.getElementById("filtroFechaHasta").type = "text";
  document.getElementById("filtroFechaDesde").type = "text";

  document
    .getElementById("filtroFechaHasta")
    .addEventListener("blur", function () {
      var inputElement = document.getElementById("filtroFechaHasta");
      var labelElement = document.getElementById("lbl-date-right");

      inputElement.type = "text";

      if (inputElement.value.trim() === "") {
        labelElement.classList.remove("lbl-focus");
      }
    });
  document
    .getElementById("filtroFechaHasta")
    .addEventListener("focus", function () {
      document.getElementById("filtroFechaHasta").type = "date";
      document.getElementById("lbl-date-right").classList.add("lbl-focus");
    });

  document
    .getElementById("filtroFechaDesde")
    .addEventListener("blur", function () {
      var inputElement = document.getElementById("filtroFechaDesde");
      var labelElement = document.getElementById("lbl-date-left");

      inputElement.type = "text";

      if (inputElement.value.trim() === "") {
        labelElement.classList.remove("lbl-focus");
      }
    });
  document
    .getElementById("filtroFechaDesde")
    .addEventListener("focus", function () {
      document.getElementById("filtroFechaDesde").type = "date";
      document.getElementById("lbl-date-left").classList.add("lbl-focus");
    });

  document.getElementById("filtroNumber").addEventListener("blur", function () {
    var inputElement = document.getElementById("filtroNumber");
    var labelElement = document.getElementById("lbl-number");

    if (inputElement.value.trim() === "") {
      labelElement.classList.remove("lbl-focus");
    }
  });

  document
    .getElementById("filtroNumber")
    .addEventListener("focus", function () {
      document.getElementById("lbl-number").classList.add("lbl-focus");
    });

  document.getElementById("filtroDoc").addEventListener("blur", function () {
    var inputElement = document.getElementById("filtroDoc");
    var labelElement = document.getElementById("lbl-doc");

    if (inputElement.value.trim() === "") {
      labelElement.classList.remove("lbl-focus");
    }
  });

  document.getElementById("filtroDoc").addEventListener("focus", function () {
    document.getElementById("lbl-doc").classList.add("lbl-focus");
  });

  document.getElementById("filtroTipo").addEventListener("blur", function () {
    var inputElement = document.getElementById("filtroTipo");
    var labelElement = document.getElementById("lbl-select");

    if (inputElement.value.trim() === "") {
      labelElement.classList.remove("lbl-focus");
    }
  });

  document.getElementById("filtroTipo").addEventListener("focus", function () {
    document.getElementById("lbl-select").classList.add("lbl-focus");
  });
});

function toggleButton() {
  var inputType = document.getElementById("filtroTipo").value;
  var inputDoc = document.getElementById("filtroDoc").value;
  var inputNumber = document.getElementById("filtroNumber").value;
  var inputDateLf = document.getElementById("filtroFechaDesde").value;
  var inputDateRg = document.getElementById("filtroFechaHasta").value;

  var button = document.getElementById("clearButton");

  if (
    inputType.trim() !== "" ||
    inputDoc.trim() !== "" ||
    inputNumber.trim() !== "" ||
    inputDateLf.trim() !== "" ||
    inputDateRg.trim() !== ""
  ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
  
}

function clearForm() {
  document.getElementById("clearButton").style.display = "none";
  document.getElementById("filtroTipo").value = "";
  document.getElementById("filtroDoc").value = "";
  document.getElementById("filtroNumber").value = "";
  document.getElementById("filtroFechaDesde").value = "";
  document.getElementById("filtroFechaHasta").value = "";

  document.getElementById("lbl-select").classList.remove("lbl-focus");
  document.getElementById("lbl-doc").classList.remove("lbl-focus");
  document.getElementById("lbl-number").classList.remove("lbl-focus");
  document.getElementById("lbl-date-left").classList.remove("lbl-focus");
  document.getElementById("lbl-date-right").classList.remove("lbl-focus");
}
