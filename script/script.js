"use strict"

console.log(`Я учу JS`);

/* пишу комментарий просто потому что могу */

console.log('js');

/* и никто мне ничего не сделает */

/* объявление переменной и присвоение ей значения*/
let myNick = 'Oleg';
let myAge = 32;
let myLogo = 'Be Happy!';
console.log(myNick + myAge);

/* добавляю константу */
const userProfile = {
    name: 'Oleg',
    age: 32,
    logo: 'Be Happy!'
}
console.log(userProfile);

/* undefined*/
let userName;
console.log(typeof userName);
console.log(userName);

if (userName === undefined) {
    console.log ('не определена');
} else {
    console.log ('определена');
}

let age23;
if (age23 === undefined) {
    console.log ('не определена');
} else {
    console.log ('определена');
}

/*null*/
let userNick = null;
console.log(userNick)

/*boolean*/
let LykashenkoWillDie = true;
if (LykashenkoWillDie) {
    console.log (":-)");
} else {
    console.log (":-(");
}

/*number*/
let vodka = 0.5;
console.log (typeof vodka);
console.log (vodka);

/*infinity*/
let getInfinity = 5 / 0;
console.log (getInfinity);
console.log (typeof getInfinity);

/*NaN*/
let beNaN = 'глобус' / 1;
console.log (beNaN);
console.log (typeof beNaN);

/*BigInt*/
let BigInteger = 1234567890987654321123456789098345678n;
console.log (BigInteger);
console.log (typeof BigInteger);

/*string*/
let nick = 'Kirduk';
let name = `Oleg Baranovsky ${nick}`;
console.log (name);
console.log (typeof name);

/*Object*/
let infoBeer = {
    name: 'Beaver',
    volume: 4.1,
    class: 'stout'
}
console.log (infoBeer);
console.log (typeof infoBeer);

/*symbol*/
let id = Symbol ("id");
console.log (id);
console.log (typeof id);

/*fuction*/
let funcVariable = function name (parameters) {
    //код функции
}
console.log (typeof funcVariable);

/*строковое преобразование типов*/
let NastyaAge = 28;
console.log(NastyaAge);
console.log(typeof NastyaAge);

NastyaAge = String(NastyaAge);

console.log(NastyaAge);
console.log(typeof NastyaAge);

/*численное преобразование типа*/
let MassaAge = "28";
console.log(MassaAge);
console.log(typeof MassaAge);

MassaAge = Number(MassaAge);

console.log(MassaAge);
console.log(typeof MassaAge);

/*логическое преобразование*/
let MomAge = "61";
console.log(MomAge);
console.log(typeof MomAge);

MomAge = Boolean (MomAge);

console.log(MomAge);
console.log(typeof MomAge);

/*домашка*/
let SasaAge = 33;
let SasaInfo = `Фрилансер ${SasaAge}`;
console.log(SasaInfo);

let userHeight = 145 / 0;
console.log(userHeight);

let dellName;
console.log(typeof dellName);


let userSize = "12" / "4"
console.log(userSize);
console.log(typeof userSize);

/*базовые операторы*/
let x;

//сложение
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//вычитание
x = 5 - 8;
console.log(`Результат вычитания: ${x}`);

//умножение
x = 5 * 8;
console.log(`Результат умножения: ${x}`);

//деление
x = 5 / 8;
console.log(`Результат деления: ${x}`);

//возведение в степень
x = 5 ** 8;
console.log(`Результат возведения в степень: ${x}`);

//взятие остатка от деления
x = 9 % 2;
console.log(`Результат взятия остатка от деления: ${x}`);

//спец возможности
let myAdress = "Bachylo " + 4;
console.log(myAdress);
console.log(typeof myAdress);

//унарный оператор сложения
let users = "12";
let admins = "13";

console.log(users + admins);

console.log(+users + +admins);
console.log(Number(users) + Number(admins));

//оператор присваивания
let a = 1 + 2;
let b = 3;
let result = 8 - (a = b + 4);
console.log ("Результат в скобках: " + a);
console.log ("Общий результат: " + result);

//присваивание по цепочке
let resultTwo
let resultOne = resultTwo = 1 + 2;
console.log(resultOne);
console.log(resultTwo);

//сокращенная запись вычислений с присваиванием
let usersAny = 5;
usersAny = usersAny + 3;
usersAny = usersAny * 2;

let usersAn = 5;
console.log(usersAn);
usersAn+= 3;
console.log(usersAn);
usersAn *=2;
console.log(usersAn);

//инкремент
let child = 1;
child++;
console.log(child)

//декремент
let money = 100;
money --;
console.log(money);

//постфиксная форма
let kitty;
kitty++;
kitty--;
//префискная форма
++kitty;
--kitty;

//пример с префиксной формой
let usersCounter = 0;
++usersCounter; //будет 1
let newUsers = 2 * usersCounter;
console.log(newUsers);


