"use strict";

// Методы JS

const str = "test";

console.log(str.toUpperCase()); // test в верхний регистр .toUpperCase
console.log(str.toLowerCase()); // test в нижний регистр .toLowerCase
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); 
// .indexOf находит индекс с которого начинается определенное слово
// в данном случае 5 у fruit

const logg = "Hello World";

console.log(logg.slice(6, 11)); 
// .slice вырезает часть строки с 6 индекса по 11
// World

console.log(logg.substring(6, 11)); 
// .substring похож на .slice , но не поддерживает отрц значения

console.log(logg.substr(6, 5)); 
// вырезает 5 букв начиная с 6 строки

const num = 12.2;
console.log(Math.round(num)); // округляет число 12.2 до целого

const test = "12.2px";
console.log(parseInt(test)) // parseInt вернет 12px, тк.к это первое целое число
console.log(parseFloat(test))  // извлекает число с плавающей точкой 12.2px