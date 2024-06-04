"use strict";

//escribir la edad y devolver si True mayor de edad, False menor de edad

function CalcularEdad(edad) {
if (edad >100 || edad <0 ) {
    return result1;
    alert (result1);
} else {
    if (edad >= 18) {
        return ("Mayor de Edad " + "(Acceso Permitido)");
    } else {
        return ("Menor de Edad " + "(Acceso Denegado)");
    }
}
}
let result1 = ("Valor No Permitido");
let result = CalcularEdad (Number (prompt ("Ingresar Edad")));
alert (result);