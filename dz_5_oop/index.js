// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(memory,power,name) {
        this.memory = memory;
        (power>0 && power<1000) ? this._power = power : console.log('від 0 до 1000')
        this.name = name;
    }

    set power (value){
        if(value<0 || value>1000){
            console.log('від 0 до 1000')
            return
        }
        this._power = value;
    }
    get power(){
        return this._power
    }

    enable(){
        console.log('WORKING!')
    }
}

// const macbook = new Computer(12, 1001, 'macbook');
// console.log(macbook);
// macbook.power = 1012;
// macbook.enable()



// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer{
    constructor(memory,power,name,width) {
        super(memory,power,name)
        this.width = width
        this.works = power / (width * memory);
    }
}

// const xxx = new Laptop(20, 800, 'XP', 15);
// console.log(xxx);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.


class UltaBook extends Laptop{
    constructor(memory,power,name,width,weight) {
        super(memory,power,name,width)
        this.weight = weight
    }
    enable(){
        if(this.weight>2 && this.works<4){
            console.log('ERRRRORROR')
        }
    }
}

// const yyy = new UltaBook(20, 800, 'XP', 15,3);
// console.log(yyy);
// yyy.enable()


// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class PC extends Computer{
    constructor(memory,power,name) {
        super(memory,power,name);
    }

    startGame(game){
        const x = this.power / this.memory;
        console.log(`You are playing ${game} with ${x} FSP`)
    }

    increasePower(much){
        if(much<1 || much>1.1){
            console.log('Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна');
            return
        }
        this._power = this._power * much;
    }
}

const macbook = new PC(12, 800, 'macbook');
console.log(macbook);
macbook.increasePower(1.11);
console.log(macbook);

// macbook.startGame('GTA')





// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//
//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// -- Додати принцу функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить