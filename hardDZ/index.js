//
// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// const load = async ()=>{
//
// function timer(){
//     return new Promise(res => setInterval(res, 1000));
// }
//     for (let i = 0; i < 60; i++) {
//         for (let j = 0; j <60 ; j++) {
//             console.log(`${i} хвилин : ${j} секунд`);
//             await timer()
//         }
//     }
// }
//
// load()


// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// const load = async ()=>{
//
//     function timer(){
//         return new Promise(res => setInterval(res, 1000));
//     }
//     for (let i = 0; i <= 24; i++) {
//         for (let j = 0; j <2 ; j++) {
//
//             for (let k = 0; k < 2; k++) {
//                 await timer()
//                 console.log(`${i} hours : ${j} min : ${k} sec`);
//             }
//         }
//
//     }
// }
//
// load()

// __________________________________________________________
//
//
// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
//
//     Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//     [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]

// ??????????????????

// ____________________________________________________________
//
// Створити функцію яка приймає число та повертає текст як в прикладі:
//     3275  —>  "3000 + 200 + 70 +5"
//

// const numToStr = (num) => {
//
//     let str = (num + '').split('');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i] + '0'.repeat(str.length - i - 1);
//     }
//     return str.join(' + ');
//
//     // --------or--------
//     // let str = (num + '').split('')
//     // const length = str.length
//     // return str.map((value, index) => (value + '0'.repeat(length - index - 1))).join(' + ');
//
// };
// console.log(numToStr(3275));
// ____________________________




// ________________________________
//
// Даний масив цілих чисел, знайдіть той, який зустрічається непарна кількість разів. Завжди буде тільки одне ціле число, яке зустрічається непарна кількість разів.
//     [1,2,3,4,5,2,4,1,3] -> 5
//


// const arrNumbers = [1, 2, 3, 4, 5, 2, 4, 1, 3];
//
// const findNumber = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr.filter(value => value === arr[i]);
//         if (x.length % 2) {
//             return x[0];
//         }
//     }
//
// };
//
// console.log(findNumber(arrNumbers));


// _____________________________________________________________




// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true

// const anagrama = (firstStr, secondStr) => [...firstStr.toLowerCase()].sort().join('') === [...secondStr.toLowerCase()].sort().join('');
//
// console.log(anagrama('DOGO', 'GOOD'));


// _______________________________________________________________
//
// Точна ступінь двійки
// Дано натуральне число N.
//     Вивести слово "Yes", якщо число "N" є точним ступенем двійки, або слово "NO" в іншому випадку
// Операцією зведення на ступінь користуватися не можна!

// function stupin(num) {
//
//     if (num % 2 !== 0) {
//         console.log('NO')
//         return 1111
//     } else num /= 2;
//
//
//     if (num === 1) {
//         console.log("YES")
//         return
//     }
//         stupin(num);
//
// }
//
// console.log(stupin(128));

//     ______________________________________________________________
//
// Сума цифр числа
// Дано натуральне число N. Вичисліть суму його цифр.
//     При вирішенні цього завдання НЕ можна використовувати рядки,
//     списки, масиви та цикли, очевидно.
//     Рекурсія)
//


// const sum = (num)=>{
//     let allSum = 0
//     xxx(num);
//
//  function xxx(number){
//     if ((number / 10) < 1) {
//         allSum += number;
//         return allSum;
//     }
//
//     if((number / 10) > 1) {
//         allSum+=(number % 10);
//         number = Math.floor(number / 10);
//     }
//
//      xxx(number)
//  }
//
// return allSum
//
// }
//
// console.log(sum(300));


// ______________________________________________________________
//
// Паліндром
// Дане слово, яке складається лише з малих латинських букв. Перевірьте, чи це слово є паліндромом. Виведіть "YES" або "NO".
//     При вирішенні цього завдання НЕ можна використовувавти цикли, у рішеннях на пітоні НЕ можна використовувати зрізи з кроком, відмінним від 1.


// const palindrom = (str) => (str === [...str].reverse().join('') ? 'YES' : 'NO');
// console.log(palindrom('tenet'));




// _______________________________________________________________
//
// Кількість одиниць
// Дана послідовність натуральних чисел у рядку, що завершується двома числами 0 поспіль.
//     Визначте, скільки разів в цій послідовності зустрічається число 1. Числа, які йдуть після двух нулів, потрібно ігнорувати.
//
// 2176491947586100 -> 3


// const oneAmout = (str) => {
//     const arr = str.toString().split('');
//     const index = arr.findIndex(value => +value === 0);
//     if (index !== -1) {
//         return arr.slice(0, index).filter(value => +value === 1).length;
//     }
//     return arr.filter(value => +value === 1).length
// };
//
// console.log(oneAmout(2176491947586100));


// _________________________________________________________________
//
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.


// const arr = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9,[[[[[[[[[[5,[[[[[[1231]]]]]]]]]]]]]]]]];
// // [1, 3, 'Hello', 'Wordd', 9, 6, 1, 'oops', 9]
//
//     const xxx =[]
// const arrModify = (arr)=>{
//     for (const arrElement of arr) {
//         if(!Array.isArray(arrElement)){
//             xxx.push(arrElement)
//         }else{
//             arrModify(arrElement)
//         }
//
//     }
//     return xxx;
// }
//
// console.log(arrModify(arr));
//     ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88

// const someArr = [1, 6, 9, 0, 17, 88, 4, 7];
// const maxNumberInArrFirst = (arr) => arr.reduce((acc, value) => (value > acc ? acc = value : acc), 0);
//
// //  --------or---------
// const maxNumberInArrSecond = (arr) => {
//     const find = arr.reduce((acc, value) => {
//         if (value > acc) {
//             acc = value;
//         }
//         return acc
//     }, 0);
//     return find;
// }
//
// console.log(maxNumberInArrFirst(someArr));
// console.log(maxNumberInArrSecond(someArr));


// ____________________________________________________________________
//
//
// Отримати масив лише унікальних значень за допомогою reduce
//     [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]

// const xxxArr = [1, 9, 0, 1, 5, 9, 1, 6]
//
//
// const uniqueArr = (arr) => {
//         const needArr = arr.reduce((acc, value) => {
//             if (acc.indexOf(value) === -1) {
//                 acc.push(value);
//             }
//             return acc
//         }, []);
//     return needArr;
// };
//
// console.log(uniqueArr(xxxArr));

// console.log(uniqueArr(xxxArr));

// -----or----
// const x = new Set(xxxArr)
// console.log(x);





// ____________________________________________________________________
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.

//     function answer (num) {
//         num = num + '';
//         return num === num.split("").reverse().join("");
//     }
//
// function largest() {
//
//     let arr = [];
//     for (let i = 99999; i > 10000; i--) {
//
//
//         for (let j = 99999; j > 10000; j--) {
//             let sum = i * j;
//             if (answer(sum)) {
//                 console.log(sum)
//                 arr.push(sum);
//             }
//         }
//     }
//     return Math.max(...arr);
// }
//
// console.log(largest());



//     ____________________________________________________________________
//
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//


// const machine = (sentence) => {
//     let i = 0;
//
//     function type() {
//         if (i < sentence.length) {
//             console.log(sentence.charAt(i));
//             i++;
//             setTimeout(type, (Math.random()) * 1000);
//         }
//     };
//     type()
// };
//
//     machine('Hello World');


// ------------------------------------------------------------------


// let fractal = {
//     a1: {
//         b1: {
//             c: 1
//         },
//         b2: {
//             c: 222
//         },
//         b3: {
//             c: {
//                 d: 33,
//                 e: 2.5,
//                 f: {
//                     g: 9999,
//                     h: {
//                         i: {
//                             j: 1001,
//                             k: 'строка',
//                             l: [1,2,3]
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
//
//
// function objInObj(obj) {
//
//     for (const objKey in obj) {
//
//         if(typeof obj[objKey]!=='object'){
//             console.log(objKey,obj[objKey])
//
//         }
//         else objInObj(obj[objKey])
//     }
// }


//     let xxx = {}
// function objInObj(obj) {
//     for (const objKey in obj) {
//
//         if(typeof obj[objKey]!=='object'){
//             console.log(objKey,obj[objKey])
//             // xxx[objKey] = obj[objKey];
//
//             xxx = {...xxx, [objKey]: obj[objKey]};
//             console.log(xxx)
//         }
//         else {
//             objInObj(obj[objKey])
//         }
//     }
//     return xxx
// }
//
// console.log(objInObj(fractal));