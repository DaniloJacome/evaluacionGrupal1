cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
]

let esNuevo = false;

cargar = function () {
    mostrarCuentas();
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

mostrarCuentas = function () {
    /*
        Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
        Columnas: NUMERO CUENTA, NOMBRE, SALDO
        En la columna NOMBRE concatenar el nombre y el apellido
    */
    let elementoCuentas;
    let cmpTabla = document.getElementById("tablaCuentas");
    let contenidoTabla =
        "<table>" +
        "<tr>" +
        "<th>N.-CUENTA</th>" +
        "<th>NOMBRE</th>" +
        "<th>SALDO</th>" +
        "</tr>";

    for (let i = 0; i < cuentas.length; i++) {
        elementoCuentas = cuentas[i];
        contenidoTabla +=
            "<tr>" +
            "<td>" +
            elementoCuentas.numeroCuenta +
            "</td>" +
            "<td>" +
            elementoCuentas.nombre + " " + elementoCuentas.apellido
        "</td>" +
            "<td>" +
            elementoCuentas.saldo +
            "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let cuentasBuscar;
    let cuentasEncontrado = null;

    for (let index = 0; index < cuentas.length; index++) {
        cuentasBuscar = cuentas[i];
        if (cuentasBuscar.cedula == numeroCuenta) {
            cuentasEncontrado = cuentasBuscar;
            break;
        }
    }
        return cuentaEncontrado;
        
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
}


agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let numeroCuentaCaja = recuperarTexto("txtNumeroCuenta");
    let nombreCaja = recuperarTexto("txtNombre");
    let apellidoCaja = recuperarTexto("txtApellido");
    let saldoCaja = recuperarFloat("txtSaldo");

    // numero cuenta
    let digitoCuenta;
    let nuevaCuenta;
    let resultadoDigito = false;
    if (numeroCuentaCaja.length == 8) {
        mostrarTexto("lblErrorNumeroCuenta", " ");
        for (let i = 0; i < nuevaCuentaCaja.length; i++) {
            digitoCuenta = nuevaCuentaCaja.charCodeAt(i);
            if (!esDigito(digitoCuenta)) {
                resultadoDigito = true;
            }
        }

        if (resultadoDigito) {
            mostrarTexto("lblErrorNumeroCuenta", "No debe tener letras");
        } else {
            nuevaCuenta = true;
        }
    } else {
        mostrarTexto("lblNumeroCuenta", " Tiene que tener 8 digitos");
    }

    //Nombre
    let nombre;
    let nuevoNombre;
    let resultadoMayuscula = false;
    if (nombreCaja.length >= 3) {
        mostrarTexto("lblErrorNombre", " ");
        for (let i = 0; i < nombreCaja.length; i++) {
            nombre = nombreCaja.charCodeAt(i);
            if (!esMayuscula(nombre)) {
                resultadoMayuscula = true;
            }
        }

        if (resultadoMayuscula) {
            mostrarTexto("lblErrorNombre", " Tiene que tener al menos 3 caracteres");
        } else {
            nuevoNombre = true;
        }

        //Apellido
        let apellido;
        let nuevoApellido;
        let resultadoMayusculaApellido = false;
        if (apellidoCaja.length >= 3) {
            mostrarTexto("lblErrorApellido", " ");
            for (let i = 0; i < apellidoCaja.length; i++) {
                apellido = apellidoCaja.charCodeAt(i);
                if (!esMayuscula(apellido)) {
                    resultadoMayusculaApellido = true;
                }
            }

            if (resultadoMayusculaApellido) {
                mostrarTexto("lblErrorApellido", " Tiene que tener al menos 3 caracteres");
            } else {
                nuevoApellido = true;
            }

            //Sueldo
            let nuevoSaldo;
            if (saldoCaja >= parseFloat(0) && saldoCaja <= parseFloat(10000)) {
                mostrarTexto("lblErrorSaldo", " ");
                nuevoSaldo = true;
            } else {
                mostrarTexto("lblErrorSaldo", " Tiene que tener entre $0 y $10000");
            }

        }
    }
}