function burguerSimple() {
  alert(
    "Usted seleccionó un combo de hamburguesa simple.\n" +
      "Precio: $1250\n" +
      "Pulse ACEPTAR para continuar."
  );
  return 1250;
}

function burguerDoble() {
  alert(
    "Usted seleccionó un combo de hamburguesa doble.\n" +
      "Precio: $1500\n" +
      "Pulse ACEPTAR para continuar."
  );
  return 1500;
}

function burguerTriple() {
  alert(
    "Usted seleccionó un como de hamburguesa triple.\n" +
      "Precio: $1750\n" +
      "Pulse ACEPTAR para continuar."
  );
  return 1750;
}

function resumenCompra(simple, doble, triple) {
  let msj1 = "";
  let msj2 = "";
  let msj3 = "";
  if (simple != 0) {
    msj1 = "Combo de hamburguesa simple - Cantidad: " + simple;
  }
  if (doble != 0) {
    msj2 = "Combo de hamburguesa doble - Cantidad: " + doble;
  }
  if (triple != 0) {
    msj3 = "Combo de hamburguesa triple - Cantidad: " + triple;
  }
  let detalleCompra =
    "DETALLE DE COMPRA\n" +
    "---------------------\n" +
    msj1 +
    "\n" +
    msj2 +
    "\n" +
    msj3 +
    "\n" +
    "---------------------";
  return detalleCompra;
}

function seleccionarBurger() {
  let carrito = 0;
  let contadorSimple = 0;
  let contadorDoble = 0;
  let contadorTriple = 0;
  let repetir = true;

  while (repetir) {
    let opcion = parseInt(
      prompt(
        "Menu de Hamburguesas\n" +
          "---------------------\n" +
          "1) Hamburguesa simple \n" +
          "2) Hamburguesa doble \n" +
          "3) Hamburguesa triple \n" +
          "---------------------\n" +
          "10) Calcular total.\n" +
          "0) Salir / Cancelar.\n" +
          "---------------------\n" +
          "Selecciona la opcion deseada: "
      )
    );

    switch (opcion) {
      case 1:
        contadorSimple++;
        carrito += burguerSimple();
        break;

      case 2:
        contadorDoble++;
        carrito += burguerDoble();
        break;

      case 3:
        contadorTriple++;
        carrito += burguerTriple();
        break;

      case 10:
        alert(
          resumenCompra(contadorSimple, contadorDoble, contadorTriple) +
            "\nEl total a abonar es: " +
            carrito
        );
        alert("Carrito de compras finalizado.\n" + "Pulse ACEPTAR para salir.");
        repetir = false;
        break;

      case 0:
        let validarSalir = prompt("¿Seguro que desea salir? Ingrese SI/NO:");
        if (validarSalir == "SI") {
          alert("Carrito de compras finalizado.");
          repetir = false;
          break;
        } else if (validarSalir == "NO") {
          break;
        } else {
          alert(
            "ERROR. \nLa opcion ingresada no es correcta.\nVuelva al menu a seleccionar una opcion."
          );
          break;
        }

      default:
        alert(
          "ERROR. \nLa opción ingresada no es correcta.\nVuelva al menu a seleccionar una opcion."
        );
        break;
    }
  }
}
