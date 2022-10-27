// 1) створити функцію яка приймає масив та виводить його

const func = (arr)=>{
    console.log(arr);
}
// func([1, 2, 3, 4]);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// const random = (amountNum)=>{
//     let arr = [];
//     for (let i = 0; i <amountNum ; i++) {
//         let num = Math.floor(0 + Math.random() * (100 + 1 + 0));
//         arr.push(num);
//     }
//     func(arr);
// }
// random(3)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const maxWithoutMath = (...num) => {
//     let max = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if(max<num[i]){
//             max=num[i]
//         }
//     }
//     console.log(max);
// };
// maxWithoutMath(213,5123,11111)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const minWithoutMin = (...num) => {
//     let min = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if(min>num[i]){
//             min = num[i];
//         }
//     }
//     console.log(min);
// }
// minWithoutMin(21, 232, 23);

// 5) створити функцію яка повертає найбільше число з масиву

// const max = (arr) => console.log(Math.max(...arr));
// max([21, 231, 12, 2222]);


// 6) створити функцію яка повертає найменьше число з масиву

// const min = (arr) => console.log(Math.min(...arr));
// min([-1, 23, -3, 0]);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// const sum = (arr)=>{
//     let all = 0;
//     for (const arrElement of arr) {
//         all+=arrElement
//     }
//     return all;
// }
// console.log(sum([32, 1, 4]));

// const sumSecond = (arr) => arr.reduce((acc, value) => value + acc, 0);
// console.log(sumSecond([32, 1, 4]));


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const avg = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum / arr.length;
// }
//
// console.log(avg([1,1,1,11]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// const keys = (arr)=>{
//     let arrKeys = [];
//     for (const arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//             arrKeys.push(arrElementKey);
//         }
//     }
//     return arrKeys
// }
// console.log(keys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// const values = (arr)=>{
//     let arrValues = [];
//     for (const arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//             arrValues.push(arrElement[arrElementKey]);
//         }
//     }
//     return arrValues;
// }
// console.log(values([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// const sumArr = (arr1,arr2)=>{
//     let sum = []
//     let x
//     for(let i=0;i<arr1.length;i++){
//         x = arr1[i] + arr2[i];
//         sum.push(x);
//     }
//     return sum;
// }
//
// console.log(sumArr([1, 2, 3, 4], [2,3,4,5]));


// =========================
//
//     - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const xxxx = (...num) => {
//     let min = num[0];
//     let max = num[0];
//     for (let i = 0; i < num.length; i++) {
//         if (min > num[i]) {
//             min = num[i];
//         }
//         if(max<num[i]){
//             max = num[i];
//         }
//     }
//     console.log(max);
//     return min
// };
//
// console.log(xxxx(2, -4, 64, -2, 43, 1));


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// const keysAndValues = (arr)=>{
//     let arrKeys = [];
//     let arrValues = [];
//     for (const arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//             arrKeys.push(arrElementKey);
//             arrValues.push(arrElement[arrElementKey]);
//         }
//     }
//     const obj = {arrKeys, arrValues}
//     return obj
// }
// console.log(keysAndValues([{name: 'Dima', age: 13}, {model: 'Camry'}]).arrValues);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// const swap = (arr,i)=>{
//     const a = arr[i];
//     const c = arr[i+1];
//     if(c!==undefined){
//         arr[i] = c;
//         arr[i+1]=a
//     }
//     return arr;
// }
// console.log(swap([9,8,0,4], 1));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// const foo = (arr)=>{
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(!arr[i]){
//             console.log(312312)
//             ++num;
//         }
//     }
//    let arrNew = arr.filter(value => value)
//     for (let i = 0; i < num; i++) {
//         arrNew.push(0);
//     }
//     return arrNew
// }
// console.log(foo([0,0,1,0]));



// =================================
// Тут потрібно гуглити. Ми цього не розглядали.
// Для тих, хто не боїться пошукової строки
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


const norm = (str) => str.replace(/\s+/g, ' ').trim()

console.log(norm('    Harry       Potter      '));