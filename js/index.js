// Clase constructora de los objetos hamburguesas.
class Hamburguesa {
  constructor(nombre, precio, descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}

// Declaracion de las hamburguesas.
const hamburguesaSimple = new Hamburguesa(
  "Burguer simple",
  1250,
  "combo de hamburguesa simple con papas"
);
const hamburguesaDoble = new Hamburguesa(
  "Burguer simple",
  1500,
  "combo de hamburguesa doble con papas"
);
const hamburguesaTriple = new Hamburguesa(
  "Burguer simple",
  1750,
  "combo de hamburguesa triple con papas"
);

// Mensaje de resumen de compra - Detalle de la cantidad de hamburguesas seleccionadas.
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

// Funcion principal.
function seleccionarBurger() {
  let carritoCompras = [];
  let contadorSimple = 0;
  let contadorDoble = 0;
  let contadorTriple = 0;
  let repetir = true;

  // Menu de opciones.
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
      // Seleccion de hamburguesa simple.
      case 1:
        contadorSimple++;
        carritoCompras.push(hamburguesaSimple);
        alert(
          "Usted seleccionó: \n" +
            "---------------------------------------------------\n" +
            "Un " +
            hamburguesaSimple.descripcion +
            "\nEl precio es $" +
            hamburguesaSimple.precio +
            "\n---------------------------------------------------"
        );
        break;

      // Seleccion de hamburguesa doble.
      case 2:
        contadorDoble++;
        carritoCompras.push(hamburguesaDoble);
        alert(
          "Usted seleccionó: \n" +
            "---------------------------------------------------\n" +
            "Un " +
            hamburguesaDoble.descripcion +
            "\nEl precio es $" +
            hamburguesaDoble.precio +
            "\n---------------------------------------------------"
        );
        break;

      // Seleccion de hamburguesa triple.
      case 3:
        contadorTriple++;
        carritoCompras.push(hamburguesaTriple);
        alert(
          "Usted seleccionó: \n" +
            "---------------------------------------------------\n" +
            "Un " +
            hamburguesaTriple.descripcion +
            "\nEl precio es $" +
            hamburguesaTriple.precio +
            "\n---------------------------------------------------"
        );
        break;

      // Calcular total de todas las hamburguesas seleccionadas.
      case 10:
        let precioTotal = 0;
        for (const burger of carritoCompras) {
          precioTotal += burger.precio;
        }
        alert(
          resumenCompra(contadorSimple, contadorDoble, contadorTriple) +
            "\nEl total a abonar es: " +
            precioTotal
        );

        alert("Carrito de compras finalizado.\n" + "Pulse ACEPTAR para salir.");
        repetir = false;
        break;

      // Salir del menu de opciones.
      case 0:
        let validarSalir = prompt("¿Seguro que desea salir? Ingrese SI/NO:");
        if (validarSalir.toUpperCase() == "SI") {
          alert("Carrito de compras finalizado.");
          repetir = false;
          break;
        } else if (validarSalir.toUpperCase() == "NO") {
          break;
        } else {
          alert(
            "ERROR. \nLa opcion ingresada no es correcta.\nVuelva al menu a seleccionar una opcion."
          );
          break;
        }

      // Opcion ingresada no aparece en las opciones del menu de opciones.
      default:
        alert(
          "ERROR. \nLa opción ingresada no es correcta.\nVuelva al menu a seleccionar una opcion."
        );
        break;
    }
  }
}
