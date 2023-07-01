class Helper {
  // 1 - Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
  static multiplicacion(a, b) {
    let result = 0
    while (b > 0) {
      result += a
      b--
    }
    return result
  }
  // 2 -Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.
  static getMaximoNumero(arr) {
    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  }
  //2 -Obtener el numero mayor dentro de un arreglo. sin iteracion utilizando la funcion de JS Math.max()"
  static conMathMax(arr) {
    let result = Math.max(...arr)
    return result
  }
  // 3  Dado un arreglo, eliminar todos los undefined, null, false y 0 (no sus valores en string). Iterar solo 1 vez.
  static quitarFalsoValores(arr) {
    let i = 0;
    while (i < arr.length) {
      if (!arr[i]) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  }
  /* 4 - Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad
    Ejemplo: [1, [2, [3, 4]], 'hola', [1, 'buenos dias']] => [1, 2, 3, 4, 'hola', 1, 'buenos dias'] */

  static dimensionar(arr) {
    let array_a_dimensionar = [];

    for (let i = 0; i < arr.length; i++) {
      /* Pregunto si es un array */
      if (Array.isArray(arr[i])) {
        /* si es un array llamo recursivamente al metedo dimensionar  */
        array_a_dimensionar = array_a_dimensionar.concat(Helper.dimensionar(arr[i]));
      } else {
        /* si no es un arreglo, lo agrego al nuevo array */
        array_a_dimensionar.push(arr[i]);
      }
    }
    return array_a_dimensionar;
  }

  /* 5 */

  static palabraMasRepetida(str) {
    /* convier el string en minusculas y utilizo match(/\w+/g) para buscar coincidencias de palabras*/
    let cadena = str.toLowerCase().match(/\w+/g);
    let cuentoPalabra = {};

    for (let i = 0; i < cadena.length; i++) {
      let palabra = cadena[i];
      if (cuentoPalabra[palabra]) {
        cuentoPalabra[palabra]++;
      } else {
        cuentoPalabra[palabra] = 1;
      }
    }

    console.log(cuentoPalabra)

    let palabraMasRepetida = '';
    let cantidad_repe = 0;

    /* ahora en en nuevo objeto que contiene las palabras del string y cuanta veces se repiten, 
    busco el mayor */
    for (let palabra in cuentoPalabra) {
      if (cuentoPalabra[palabra] > cantidad_repe) {
        palabraMasRepetida = palabra;
        cantidad_repe = cuentoPalabra[palabra];
      }
    }

    // Opción 1: Devolver un objeto
    let resultado = {};
    resultado["la palabra más repetida"] = palabraMasRepetida;
    resultado["cantidad de repeticiones"] = cantidad_repe;
    return resultado;

    // Opción 2: Devolver un arreglo
    // return [palabraMasRepetida, cantidad_repe];
  }

  /* 6- Verificar si un string es un palíndromo. */

  static esPalindromo(cadena) {
    // convierto la cadena a minusculas y utilizo replace(/[^a-z0-9]/g, '')  para eliminar todos los caracteres no alfanuméricos.
    const cadenaProcesada = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Comparar la cadena original con su versión invertida
    const resultado = cadenaProcesada === cadenaProcesada.split('').reverse().join('');

    let respuesta = {}
    respuesta["String"] = cadena;
    respuesta["valor"] = resultado;

    return respuesta
  }

  /* 7- Dado 3 numeros, devolver el mayor. Hacer una function, adaptada de la anterior, para que funcione con cualquier cantidad de numeros. */

  /* para resolver este decidi utilizar nuevamente la funcion Math.max que utilice 
    tambien en el ejercicio 2 para hacer mas corto el desarrollo.
  */

  static encontrarMayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

  static encontrarMayorDeMuchos(...numbers) {
    return Math.max(...numbers);
  }

}


