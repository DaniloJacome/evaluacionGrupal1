cuentas = [
  {
    numeroCuenta: "02234567",
    cedula: "1714616123",
    nombre: "Juan",
    apellido: "Perez",
    saldo: 0.0,
  },
  {
    numeroCuenta: "02345211",
    cedula: "1281238233",
    nombre: "Felipe",
    apellido: "Caicedo",
    saldo: 0.0,
  },
];

cargar = function () {
  mostrarComponente("divTransacciones");
  ocultarComponente("divCuentas");
  ocultarComponente("divMovimientos");
  deshabilitarComponente("botonDepositar");
  deshabilitarComponente("botonRetirar");
};

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
  let cuentaBuscar;
  let cuentaEncontrado = null;
  for (let i = 0; i < cuentas.length; i++) {
    cuentaBuscar = cuentas[i];
    if (cuentas[i].numeroCuenta == numeroCuenta) {
      cuentaEncontrado = cuentaBuscar;
      break;
    }
  }
  return cuentaEncontrado;
};

ejecutarBusqueda = function () {
  let cuentaBusqueda = recuperarTexto("txtBuscarNumeroCuenta");
  let resultadoBusqueda = buscarCuenta(cuentaBusqueda);
  if (resultadoBusqueda == null) {
    alert("CUENTA NO EXISTE");
  } else {
    mostrarTexto("txtCuenta", resultadoBusqueda.numeroCuenta);
    mostrarTexto("txtNombre", resultadoBusqueda.nombre);
    mostrarTexto("txtSaldo", resultadoBusqueda.saldo);
    habilitarComponente("botonDepositar");
    habilitarComponente("botonRetirar");
  }
};

depositar = function (numeroCuenta, monto) {
  let cuentaAfectada = buscarCuenta(numeroCuenta);
  let cuentaActual = monto + cuentaAfectada.saldo;
  return cuentaActual;
  //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
  //Al saldo actual de la cuenta afectada, le suma el monto que recibe como parámetro
};

ejecutarDeposito = function () {
  let cuentaBusqueda = recuperarTexto("txtBuscarNumeroCuenta");
  let montoIngresado = parseFloat(recuperarTexto("txtMonto"));
  depositar(cuentaBusqueda, montoIngresado);
  //invoca a depositar
  //Muestra un mensaje TRANSACCION EXITOSA
  //Muestra en pantalla el nuevo saldo de la cuenta
};

retirar = function (numeroCuenta, monto) {
  let cuentaAfectada;
  //invoca a buscarCuenta, guarda el resultado en la variable cuentaAfectada;
  //Valida si la cuenta tiene el saldo suficiente para retirar el monto
  //Si el saldo es suficiente,al saldo actual de la cuenta afectada, le resta el monto que recibe como parámetro
  //Si el saldo no es suficiente, muestra un alert SALDO INSUFICIENTE
  //Si logra retirar muestra un mensaje TRANSACCION EXITOSA y muestra en pantalla el nuevo saldo de la cuenta
};
