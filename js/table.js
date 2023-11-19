window.addEventListener("load", function () {
  document.getElementById("filtroFechaHasta").type = "text";
  document.getElementById("filtroFechaDesde").type = "text";

  document.getElementById("filtroFechaHasta").addEventListener("blur", function () {
    document.getElementById("filtroFechaHasta").type = "text";
  });
  document.getElementById("filtroFechaHasta").addEventListener("focus", function () {
    document.getElementById("filtroFechaHasta").type = "date";
  });

  document.getElementById("filtroFechaDesde").addEventListener("blur", function () {
    document.getElementById("filtroFechaDesde").type = "text";
  });
  document.getElementById("filtroFechaDesde").addEventListener("focus", function () {
    document.getElementById("filtroFechaDesde").type = "date";
  });
});
