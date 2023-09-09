movimientos = [
  { numeroCuenta: "02234567", monto: 10.24, tipo: "D" },
  { numeroCuenta: "02345211", monto: 45.9, tipo: "D" },
  { numeroCuenta: "02234567", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 65.23, tipo: "C" },
  { numeroCuenta: "02345211", monto: 12.0, tipo: "D" },
];

cargar = function () {
  mostrarComponente("divMovimientos");
  ocultarComponente("divCuentas");
  ocultarComponente("divTransacciones");
};

ejecutarBuscar = function () {
  let recupwerado = recuperarTexto("txtCuentab1");
  console.log(recupwerado);
  filtrarMovimientos(recupwerado);
};

filtrarMovimientos = function (numeroCuenta) {
  let movimientosCuenta = [];

  //Se barre el arreglo de movimientos
  for (let i = 0; i < movimientos.length; i++) {
    if (movimientos[i].numeroCuenta == numeroCuenta) {
      movimientosCuenta.push(movimientos[i]);
    }
  }
  //En cada iteración, verifica si el numero de cuenta del movimiento es igual al que recibe como parametro
  //En caso de serlo, agrega la cuenta al arreglo movimientosCuenta
  //Invoca a mostrarMovimientos, pasándole como parámetro movimientosCuenta
  console.log(movimientosCuenta);
  mostrarMovimientos(movimientosCuenta);
};

/*
    Recibe un arreglo con los movimientos que va a mostrar en pantalla
*/
mostrarMovimientos = function (misMovimientos) {
  //Muestra en pantalla una tabla con los movimientos que recibe en misMovimientos
  //Columnas: NUMERO CUENTA, MONTO, TIPO
  let cmpTabla = document.getElementById("tablaMovimientos");
  let contenidoTabla =
    "<table><tr>" +
    "<th>NUMERO CUENTA</th>" +
    "<th>MONTO</th>" +
    "<th>TIPO</th></tr>";
  for (let i = 0; i < misMovimientos.length; i++) {
    elementoMovimiento = misMovimientos[i];
    console.log(elementoMovimiento);
    contenidoTabla +=
      "<tr><td>" +
      elementoMovimiento.numeroCuenta +
      "</td>" +
      "<td>" +
      elementoMovimiento.monto +
      "</td>" +
      "<td>" +
      elementoMovimiento.tipo +
      "</td></tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML=contenidoTabla;
  //Si ya pinta correctamente la tabla, hacer el siguiente cambio:
let calculado;
  //Si el tipo es D(DEBITO), mostrar el monto en negativo (multiplicar por -1)
  for(let i= 0; i < misMovimientos.length;i++){
    if(misMovimientos[i].tipo == "D"){
        calculado= misMovimientos[i].monto * -1;
        
     }
  }
  
  //Si el tipo es C(CREDITO), mostrar el monto en positivo (tal como está guardado)
};
