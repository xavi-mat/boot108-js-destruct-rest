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
