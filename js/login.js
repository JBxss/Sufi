window.addEventListener("load", function () {
  document
    .getElementById("input-username")
    .addEventListener("blur", function () {
      var inputElement = document.getElementById("input-username");
      var labelElement = document.getElementById("lbl-nombre");

      if (inputElement.value.trim() === "") {
        labelElement.classList.remove("lbl-focus");
      }
    });

  document
    .getElementById("input-username")
    .addEventListener("focus", function () {
      document.getElementById("lbl-nombre").classList.add("lbl-focus");
    });

  document.getElementById("password").addEventListener("blur", function () {
    var inputElement = document.getElementById("password");
    var labelElement = document.getElementById("lbl-pass");

    if (inputElement.value.trim() === "") {
      labelElement.classList.remove("lbl-focus");
    }
  });

  document.getElementById("password").addEventListener("focus", function () {
    document.getElementById("lbl-pass").classList.add("lbl-focus");
  });
});

function validateForm() {
  var usuario = document.getElementById("input-username").value;
  var contrasena = document.getElementById("password").value;

  // Validación para el Usuario
  if (usuario.length < 6 || usuario.length > 20) {
    alert("El nombre de usuario debe tener entre 6 y 20 caracteres.");
    return false;
  }

  var regexUsuario = /^[a-zA-Z0-9_]+$/;
  if (!regexUsuario.test(usuario)) {
    alert(
      "El nombre de usuario solo puede contener letras, números y guiones bajos."
    );
    return false;
  }

  // Validación para la Contraseña
  if (contrasena.length < 8 || contrasena.length > 20) {
    alert("La contraseña debe tener entre 8 y 20 caracteres.");
    return false;
  }

  var regexMayuscula = /[A-Z]/;
  var regexMinuscula = /[a-z]/;
  var regexNumero = /[0-9]/;

  if (
    !regexMayuscula.test(contrasena) ||
    !regexMinuscula.test(contrasena) ||
    !regexNumero.test(contrasena) ||
    !regexEspecial.test(contrasena)
  ) {
    alert(
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
    );
    return false;
  }

  // Todas las validaciones pasaron
  return true;
}
