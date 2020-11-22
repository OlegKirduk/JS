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
