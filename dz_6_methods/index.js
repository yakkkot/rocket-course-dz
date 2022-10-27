// 1) Створити масив з 20 чисел та:

let arr = [];
const numbers = ()=>{
    for (let i = 0; i < 20; i++) {
        let x = Math.floor(Math.random() * (1000 - 1) + 1)
        arr.push(x);
    }
}
numbers();

// console.log(arr);

//     a) відсортувати його від меншого до більшого.

// const sortedArr = arr.sort((a, b) => a - b);
// console.log(sortedArr)

//     b) відсортувати його від більшого до меншого.

// const sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr)

//     c) Відфілтрувати числа які є кратними 3.

// const filteredArr = arr.filter(a => !(a % 3));
// console.log(arr);
// console.log(filteredArr)


// d) Відфілтрувати числа які є більшими за 10.

// const filteredArr = arr.filter(a => a > 10);
// console.log(filteredArr);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// arr.forEach(value=> {
//     const block = document.createElement('div');
//     block.innerText = value;
//     document.body.appendChild(block);
// })

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// const x = arr.map(value => value * 3);
// console.log(x)

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// const x = arr.reduce((acc, value) => acc + value, 0);
// console.log(x);
// console.log(arr);


// 2) Створити масив з 20 стрічок та:

const strArr = ['Anya', 'Galya', 'Yaroslav', 'Dima', 'Max', 'rerw', 'hfghr', 'rwersd'];

//     a) Відсортувати його в алфавітному порядку

// const x = strArr.sort((a,b)=> {
//     // if(a>b){
//     //     return 1
//     // }
//     // return -1;
//
//     let number = a.localeCompare(b);
//     return number;
// })
//
// console.log(x);

// b) Відсортувати в зворотньому порядку

// const x = strArr.sort((a,b)=> {
//     // if(a>b){
//     //     return 1
//     // }
//     // return -1;
//
//     let number = b.localeCompare(a);
//     return number;
// })
//
// console.log(x);


// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// const filteredArr = strArr.filter(value => value.length > 4);
// console.log(filteredArr);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// const x = strArr.map(value => `Sam says ${value}`);
// console.log(x);

//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :

    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a, b) => b.age - a.age);
// console.log(users);
//
// users.sort((a, b) => a.age - b.age);
// console.log(users);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a,b)=>{
//     if(a.name.length>b.name.length){
//         return -1;
//     }
//     return 1;
// })
// console.log(users);
//
// users.sort((a,b)=>{
//     if(a.name.length>b.name.length){
//         return 1;
//     }
//     return -1;
// })
// console.log(users);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//
// const x = users.map((value,index) => ({...value, id: index + 1}))
// console.log(x)
// console.log(users);

// d) відсортувати його за індентифікатором


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//

// const x = users.reduce((acc,value)=>{
//     if(value.isMarried){
//         acc.push({...value, apartment: true})
//     }
//     return acc;
// },[])
// console.log(x)
// console.log(users);


// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :


//     - двигун більше 3х літрів

// const x = cars.filter(value => value.volume > 3);
// console.log(x);

// - двигун = 2л

// const x = cars.filter(value => value.volume === 3);
// console.log(x);

// - виробник мерс
//
// const x = cars.filter(value => value.producer === 'mercedes');
// console.log(x);

// - двигун більше 3х літрів + виробник мерседес


// const x = cars.filter(value => value.producer === 'mercedes' && value.volume > 3);
// console.log(x);

// - двигун більше 3х літрів + виробник субару

// const x = cars.filter(value => value.producer === 'subaru' && value.volume > 3);
// console.log(x);

// - сили більше ніж 300

// const x = cars.filter(value => value.power > 300);
// console.log(x);

// - сили більше ніж 300 + виробник субару

// const x = cars.filter(value => value.power > 300 && value.producer==="subaru");
// console.log(x);

// - мотор серіі ej

// const x = cars.filter(value => value.power > 300);
// console.log(x);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// const x = cars.filter(value => value.engine.startsWith('ej') && value.power > 300);
// console.log(x);

// - двигун меньше 3х літрів + виробник мерседес

// const x = cars.filter(value => value.producer==="mercedes" && value.volume<3);
// console.log(x);

// - двигун більше 2л + сили більше 250

// const x = cars.filter(value => value.power > 250 && value.volume > 2);
// console.log(x);


// - сили більше 250  + виробник бмв

// const x = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(x);


// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
//
// -- Відсортувати їх по ID

// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);

// -- Відсортувати їх по ID в зворотньому порядку

// usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(usersWithAddress);

// -- Відсортувати по віку

// usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(usersWithAddress);

// -- Відсортувати по віку в зворотньому порядку

// usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(usersWithAddress);

// -- Відсорутвати по імені

// usersWithAddress.sort((a, b) => {
//     const number = a.name.localeCompare(b.name);
//     return number
// });
// console.log(usersWithAddress);

// -- Відсорутвати по назві вулиці

// usersWithAddress.sort((a, b) => {
//     const number = a.address.street.localeCompare(b.address.street);
//     return number
// });
// console.log(usersWithAddress);


// -- Відсорутвати по номеру будинку

// usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(usersWithAddress);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// const x = usersWithAddress.filter(value => value.age < 30);
// console.log(x)

// -- Залишити тільки одружених

// const x = usersWithAddress.filter(value => value.isMarried);
// console.log(x)


// -- Залишити тільки одружених, які молодні за 30

// const x = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(x)

// -- Залишити лише тих, в кого парні номери будинків.

// const x = usersWithAddress.filter(value => !(value.address.number%2));
// console.log(x)


// -- Порахувати загальний вік всіх людей. (reduce)

// const x = usersWithAddress.reduce((acc,value)=> acc+value.age,0)
// console.log(x)

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// const x = usersWithAddress.reduce((acc,value)=> {
//
//     if(value.isMarried && value.age>=30){
//         acc.push({...value, child: true})
//     }
//
//     return acc;
// },[])
// console.log(x)

//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:

const cars = [
    {
        marka: 'bmw',
        power: 444,
        owner: {
            name: 'vasya',
            yearOld: 35,
            dosvid: 3
        },
        price: 10000,
        year: 2013,
    },
    {
        marka: 'audi',
        power: 2012340,
        owner: {
            name: 'yura',
            yearOld: 65,
            dosvid: 14
        },
        price: 15000,
        year: 2015,
    }, {
        marka: 'honda',
        power: 4234,
        owner: {
            name: 'masha',
            yearOld: 55,
            dosvid: 15
        },
        price: 20400,
        year: 2005,
    },


    {
        marka: 'VAZ',
        power: 123,
        owner: {
            name: 'vlad',
            yearOld: 20,
            dosvid: 5
        },
        price: 4000,
        year: 2004,
    }
];

//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
const x = cars.map((value,index) => ({...value, power: value.power*1.1}))
console.log(cars);
console.log(x);

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
const arrXXX = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
console.log(arrXXX.indexOf(4));
console.log(arrXXX.lastIndexOf(15));
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.