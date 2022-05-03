'use strict';
////////////////////////////////////////////////////////////////////////////////
/**
 * Exercises JavaScript - Destructuring, Spread, Rest
 * for  The Bridge
 * by   xavimat
 * 2022-05-03
 */

////////////////////////////////////////////////////////////////////////////////
// 1. Destructuring
console.log("///////////////////////////////\n1. Destructuring");

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

// Extrae la empleada Ana con todos sus datos personales:
const [, ana] = empleados;
console.log("ana:", ana);

// Extrae el email del empleado Luis --> Luis@gmail.com
const [{ email: emailLuis }] = empleados;
console.log("emailLuis:", emailLuis);

// Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
// // Al final
// a = 3;
// b = 5;

console.log("a:", a, "b:", b);

[b, a] = [a, b];

console.log("a:", a, "b:", b);


////////////////////////////////////////////////////////////////////////////////
// 2. Spread/rest
console.log("\n///////////////////////////////\n2. Ejercicios spread/rest");

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

const sumEveryOther = (...nums) => nums.reduce((prev, curr) => prev + curr);

console.log("sumEveryOther(6, 8, 2, 3, 1):", sumEveryOther(6, 8, 2, 3, 1)); // 20
console.log("sumEveryOther(11, 3, 12):", sumEveryOther(11, 3, 12));     // 26


// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
//     addOnlyNums(1, 'perro', 2, 4); //7

const addOnlyNums = (...params) => params
    .filter((elem) => !isNaN(elem))
    .reduce((prev, curr) => Number(prev) + Number(curr));

console.log("addOnlyNums(1, 'perro', 2, 4):", addOnlyNums(1, 'perro', 2, 4)); // 7


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...params) => params.length;

console.log("countTheArgs('gato', 'perro'):", countTheArgs('gato', 'perro')); //2
console.log("countTheArgs('gato', 'perro', 'pollo', 'oso'):", countTheArgs('gato', 'perro', 'pollo', 'oso')); //4


// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log("combineTwoArrays:", combineTwoArrays([1, 2, 3], ['a', 'b', 'c']));




////////////////////////////////////////////////////////////////////////////////
//
console.log("\n///////////////////////////////\n3. Extras");

// Dado el siguiente objeto:
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las variables maximaHoy y maximaManana
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log("maximaHoy:", maximaHoy);
console.log("maximaManana", maximaManana);


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

const onlyUniques = (...params) => [...(new Set(params))];

console.log("onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'):", onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
//['gato', 'pollo', 'cerdo']
console.log("onlyUniques(1, 1, 2, 2, 3, 6, 7, 8):", onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));
//[1, 2, 3, 6, 7, 8]


// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.

// const combineAllArrays = (...arrs) => [...arrs.map(arr=>arr.map(el=>el))];
// const combineAllArrays = (...arrs) => [arrs.map((...arr)=>))];
const combineAllArrays = (...arrs) => {
    let combined = [];
    arrs.forEach(arr=>{
        arr.forEach(elem=>{
            combined.push(elem)
        })
    });
    return combined;
};

console.log("combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]):", combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
// [3, 6, 7, 8, 2, 7, 3, 1]
console.log(
    "combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]):",
    combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]


// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

const sumAndSquare = (...nums) => nums.reduce((prev, curr) => prev + curr ** 2);

console.log("sumAndSquare(1,2,3,4):", sumAndSquare(1, 2, 3, 4));