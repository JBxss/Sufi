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

var datos = [
  { fecha: '2023-11-01 02:43:24', numeroDesembolso: 19384774, TipoDocumento: 'Cedula', NumeroDocumento: 1938477488, Monto: '$237.283.738' },
{ fecha: '2023-11-01 02:43:24', numeroDesembolso: 19384774, TipoDocumento: 'Cedula', NumeroDocumento: 1938477499, Monto: '$557.283.738' },
{ fecha: '2023-11-02 05:12:10', numeroDesembolso: 84736281, TipoDocumento: 'Pasaporte', NumeroDocumento: 1938477400, Monto: '$777.283.738' },
{ fecha: '2023-11-03 08:30:45', numeroDesembolso: 56782309, TipoDocumento: 'Licencia', NumeroDocumento: 1938477466, Monto: '$337.283.738' },
{ fecha: '2023-11-04 12:15:30', numeroDesembolso: 98765432, TipoDocumento: 'Cedula', NumeroDocumento: 1938477422, Monto: '$217.283.738' },
{ fecha: '2023-11-05 14:22:18', numeroDesembolso: 34567890, TipoDocumento: 'Pasaporte', NumeroDocumento: 1938477411, Monto: '$137.283.738' },
{ fecha: '2023-11-06 18:11:05', numeroDesembolso: 23456789, TipoDocumento: 'Licencia', NumeroDocumento: 2345678944, Monto: '$937.283.738' },
{ fecha: '2023-11-07 20:45:55', numeroDesembolso: 12345678, TipoDocumento: 'Cedula', NumeroDocumento: 2345678999, Monto: '$637.283.738' },
{ fecha: '2023-11-08 23:08:42', numeroDesembolso: 87654321, TipoDocumento: 'Pasaporte', NumeroDocumento: 2345678955, Monto: '$837.283.738' },
{ fecha: '2023-11-09 01:59:30', numeroDesembolso: 78901234, TipoDocumento: 'Licencia', NumeroDocumento: 2345678966, Monto: '$997.283.738' },
{ fecha: '2023-11-10 04:37:15', numeroDesembolso: 65432109, TipoDocumento: 'Cedula', NumeroDocumento: 2345678923, Monto: '$754.283.738' },
{ fecha: '2023-11-01 02:43:24', numeroDesembolso: 19384774, TipoDocumento: 'Cedula', NumeroDocumento: 1938477488, Monto: '$237.283.738' },
{ fecha: '2023-11-01 02:43:24', numeroDesembolso: 19384774, TipoDocumento: 'Cedula', NumeroDocumento: 1938477499, Monto: '$557.283.738' },
{ fecha: '2023-11-02 05:12:10', numeroDesembolso: 84736281, TipoDocumento: 'Pasaporte', NumeroDocumento: 1938477400, Monto: '$777.283.738' },
{ fecha: '2023-11-03 08:30:45', numeroDesembolso: 56782309, TipoDocumento: 'Licencia', NumeroDocumento: 1938477466, Monto: '$337.283.738' },
{ fecha: '2023-11-04 12:15:30', numeroDesembolso: 98765432, TipoDocumento: 'Cedula', NumeroDocumento: 1938477422, Monto: '$217.283.738' }
];

var registrosPorPagina = 16;
var paginaActual = 1;

function mostrarTabla(pagina) {
  var tabla = document.getElementById("miTabla");
  var paginacion = document.getElementById("paginacion");

  var inicio = (pagina - 1) * registrosPorPagina;
  var fin = inicio + registrosPorPagina;

  var datosPagina = datos.slice(inicio, fin);

  // Limpiar solo las filas de datos, no los encabezados
  while (tabla.rows.length > 1) {
      tabla.deleteRow(1);
  }

  datosPagina.forEach(function (fila) {
      var tr = tabla.insertRow(-1); // Insertar una fila al final

      // Crear celdas y añadir datos
      var tdId = tr.insertCell(0);
      tdId.innerHTML = fila.fecha;

      var tdNombre = tr.insertCell(1);
      tdNombre.innerHTML = fila.numeroDesembolso;

      var tdEdad = tr.insertCell(2);
      tdEdad.innerHTML = fila.TipoDocumento;

      var tdFecha = tr.insertCell(3);
      tdFecha.innerHTML = fila.NumeroDocumento;

      var tdFecha = tr.insertCell(4);
      tdFecha.innerHTML = fila.Monto;
  });


  actualizarPaginacion(pagina);
}

function actualizarPaginacion(pagina) {
  var totalPaginas = Math.ceil(datos.length / registrosPorPagina);
  var paginacion = document.getElementById("paginacion");
  var totalPaginasElement = document.getElementById("totalPaginas");

  totalPaginasElement.textContent = " de " + totalPaginas;

  paginacion.innerHTML = "";

  // Botón Anterior
  var btnAnterior = document.createElement("a");
  btnAnterior.href = "javascript:void(0);";
  btnAnterior.innerHTML = "&lt;";
  btnAnterior.addEventListener("click", function () {
      if (pagina > 1) {
          paginaActual = pagina - 1;
          mostrarTabla(paginaActual);
      }
  });
  paginacion.appendChild(btnAnterior);

  // Páginas
  for (var i = 1; i <= totalPaginas; i++) {
      (function (pageNumber) {
          var enlace = document.createElement("a");
          enlace.href = "javascript:void(0);";
          enlace.innerHTML = pageNumber;

          if (pageNumber === pagina) {
              enlace.classList.add("active");
          } else {
              enlace.addEventListener("click", function () {
                  paginaActual = pageNumber;
                  mostrarTabla(paginaActual);
              });
          }

          paginacion.appendChild(enlace);
      })(i);
  }

  // Botón Siguiente
  var btnSiguiente = document.createElement("a");
  btnSiguiente.href = "javascript:void(0);";
  btnSiguiente.innerHTML = "&gt;";
  btnSiguiente.addEventListener("click", function () {
      if (pagina < totalPaginas) {
          paginaActual = pagina + 1;
          mostrarTabla(paginaActual);
      }
  });
  paginacion.appendChild(btnSiguiente);
}

var datosOriginales = datos.slice(); // Copia de seguridad de los datos originales
var registrosPorPaginaSelect = document.getElementById("registrosPorPagina");

function cambiarRegistrosPorPagina() {
  registrosPorPagina = parseInt(registrosPorPaginaSelect.value);
  mostrarTabla(1);
}

function aplicarFiltroPorFecha(event) {
event.preventDefault();  // Evitar la recarga automática del formulario

var filtroNombre = document.getElementById("filtroNombre").value.toLowerCase();
var filtroEdad = document.getElementById("filtroEdad").value;
var filtroFechaDesde = document.getElementById("filtroFechaDesde").value;
var filtroFechaHasta = document.getElementById("filtroFechaHasta").value;

// Restaurar datos originales si todos los filtros están vacíos
if (filtroNombre.trim() === "" && filtroEdad === "" && filtroFechaDesde === "" && filtroFechaHasta === "") {
datos = datosOriginales.slice();
} else {
// Aplicar el filtro por nombre, edad y rango de fechas
datos = datosOriginales.filter(function (fila) {
  var cumpleFiltroNombre = filtroNombre === "" || fila.nombre.toLowerCase().includes(filtroNombre);
  var cumpleFiltroEdad = filtroEdad === "" || fila.edad.toString() === filtroEdad;

  var fechaFila = new Date(fila.fecha + 'T00:00:00Z');
  var cumpleFiltroFechaDesde = filtroFechaDesde === "" || fechaFila >= new Date(filtroFechaDesde + 'T00:00:00Z');
  var cumpleFiltroFechaHasta = filtroFechaHasta === "" || fechaFila <= new Date(filtroFechaHasta + 'T00:00:00Z');

  // Devolver true si todas las condiciones se cumplen
  return cumpleFiltroNombre && cumpleFiltroEdad && cumpleFiltroFechaDesde && cumpleFiltroFechaHasta;
});
}

mostrarTabla(1);
}


function cambiarPagina() {
  var inputPagina = document.getElementById("inputPagina");
  var nuevaPagina = parseInt(inputPagina.value);

  if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(datos.length / registrosPorPagina)) {
      paginaActual = nuevaPagina;
      mostrarTabla(paginaActual);
  } else {
      // Manejar el caso en el que se ingresa un valor no válido
      inputPagina.value = paginaActual;
  }
}

mostrarTabla(paginaActual);