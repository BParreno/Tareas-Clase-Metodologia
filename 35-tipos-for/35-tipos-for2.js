'use strict';

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

function filt(nums) {
    let result = nums.filter(num => num > 10)
                     .map(num => num.toFixed(2).toString());

    return result;
}

let result = filt(nums);
console.log(result);

//Explicación paso a paso:
//Función filtrarYRedondear: Esta función toma como argumento el arreglo nums.
//Filtrar los números mayores a 10: Utiliza el método filter para iterar sobre 
//  nums y devolver solo los números que son mayores a 10.

//Redondear a 2 decimales y convertir a string:
//Utiliza el método toFixed(2) en cada número filtrado para redondearlo a 2 decimales.
//Luego, utiliza toString() para convertir el número redondeado en un string.
//Retorno: La variable result contiene un arreglo de strings que representan los números mayores a 10 y redondeados a 2 decimales.
//Uso: Llamando a filtrarYRedondear(nums), obtendrás como resultado ["13.68", "10.35"], 
//  que son los números mayores a 10 en nums, redondeados a 2 decimales y convertidos a strings.
