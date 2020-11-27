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

/*операторы сравнения*/
console.log(2>1);
console.log(2<1);
console.log(2 == 1);
console.log(2 != 1);

let reesult = 11 > 10;
console.log(reesult);

console.log('б'>'а'); //алфавитный порядок
console.log('б'>'Б'); //регистр
console.log('слайдер'>'слайд'); //кол-во символов
console.log('скрипт'>'скрипка'); //алфавитный порядок

// сравнение разных типов
console.log("58" > 10); //преобразование String в число
console.log("007" == 7); //преобразование String в число
//НО
console.log("007" === 7); // так как === оператор строгово равенства и проверяет равенство без приведения типов

//логическое сравнение
console.log(true == 1);
console.log(false == 0);

//сравнение null и undefined
console.log (null !== undefined);
console.log (null == undefined); //т.к. тут не строгое равенство

/*логические операторы - || оператор ИЛИ
его процесс работы:
1. вычисляет операнты слева направо
2. если результат true, останавливается и возвращает исходное значение
3. если все операнты false, то возвращает значение последнего из них*/
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//пример
console.log(1 || 0); //true это 1
console.log(undefined || '' || 'Муся' || 0); //true нет совсем, вернет последнее значение - 0

//пример
let company1 = ''; 
let company2 = 'Fenox';
let company = company1 || company2 || "Cosmolac";
console.log(company);

//еще пример
let gamers = 0;
let workers = 5;
gamers > workers || workers++;
console.log(workers);

/*логические операторы - && оператор И 
1. вычисляет операнты слева направо
2. если результат false, останавливается и возвращает исходное значение
3. если все операнты true, то возвращает значение последнего из них*/
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//примеры
console.log('music' && 0 && 2 ); //0 - false
console.log(1 && null && 2); //null - false
console.log('15' && '42'); //все true

//приоритет && больше чем ||
console.log(1 && 0 || 2  && 1 );

/*логические операторы - ! оператор НЕ 
1. сначала приводит аргумент к логическому типу true или false
2. затем возвращает противоположное значение*/
console.log(!null); //true
console.log(!1); //false
console.log(!''); //true
console.log(!'cat'); //false

//оператор ! имеет наивысший приоритет
console.log(!true && 50 || 18 && !1);

/*логические операторы - ?? оператор объединения с null
оператор ?? возвращает первый аргумент если он не null\undefined, иначе второй */
let dog;
console.log(dog ?? 'пёсель');

/*домашка*/
console.log(1 || 5); //1, т.к. оба значения true, то выводит первый из них
console.log(5 || 1); //5, т.к. оба значения true, то выводит первый из них
console.log(0 || 1); //1, т.к. первое значение false, а второе true
console.log(1 || 0); //1, т.к. первое значение true, а второе false
console.log(0 || 0); //0, т.к. оба значения false, то выводит второе значение 0
console.log(null || 1); //1 
console.log(undefined || 1); //1

let MassaNastya;
console.log(String ('MassaNastya') || 0); //MassaNastya, т.к. string со значением это 1, а значит true

console.log(1 && 5); //1, т.к. оба значения true, то выводит последний из них
console.log(0 && 1); //0, т.к. первое значение false, а второе true
console.log(1 && 0); //0, т.к. первое значение true, а второе false
console.log(undefined && 0); //undefined, т.к. оба значения false, то выводит первое значение

/*еще домашка*/

console.log('35' + - "22"); //строка и строка со значением минус, поэтому 35-22

console.log('35' * "22"); //посчитает 770

let pussy = 0;
let dick = ++pussy;
console.log(dick); //1

console.log(!false && 11 || 18 && !''); //true && true || true && true // true

let war = 0;
console.log(war ?? "Без имени"); //0

/*IF ELSE, синтаксис*/

let message = "Жыве Беларусь!";
if (2 >1) {
    console.log(message);
}

let word = 'Жыве!';
if (2 + 1 === 3 && "1" ==1 || 10 > 5 && 10 === 1) { /*true && true || true && false, а это значит true || false*/ 
    console.log(word);  
}

let Belarus = true;
let Lukashenko = false;
let Tichanovskaya = true;
if (Belarus && Lukashenko || Belarus && Tichanovskaya) {
    console.log(message);
}

//если запись короткая - то можно так:
let logo = 'Жыве!';
if (2 > 1) console.log(logo);

// блоки else и else if
let moto = "Привет!";
let five = 5;
if (five > 4) {
    console.log(moto);
} else {
    console.log("Hello!");
}

let letter = 'A';
let number = 3;

if(number > 50){
    console.log ('3 больше 50');
} else if (number > 25) {
    console.log ('3 больше 25');
} else if (number > 1) {
    console.log ('3 больше 1');
} else {
    console.log ('условие не выполнено');
}

/*условный оператор ?*/

//первый вариант записи
let greeting = "Hello";
let greetingEnd;

if (5 > 1) {
    greetingEnd = ", Oleg!"
} else {
    greetingEnd = ", Sasha!"
}

greeting += greetingEnd;
console.log(greeting);

//второй вариант записи
let hello = "Hello";

let helloEnd = (5 > 1) ? ", Oleg!" : ", Sasha!";

hello += helloEnd;
console.log(hello);

/*домашка*/
if (1 === "1"){ //ложь
    console.log ('истина');
} else {
    console.log ('ложь');
}

if ( 5== "5"){ //истина
    console.log ('истина');
} else {
    console.log ('ложь');
}

let answer = (92 > '11' && 58 < 100) ? 'истина' : 'ложь'; 
console.log (answer);

if (0) {
    console.log ('ложь');
} else if (" ") {
    console.log ('истина');
}

/*Циклы for и while*/

//цикл while - проверяет условие перед каждой итерацией
let num = 0;
while (num < 5){
    console.log (num);
    num++;
}

//пример без {}
let nu = 5;
while (nu) console.log (nu--);

//конструкция do...while - проверяет условие после каждой итерации
let numb = 3;
do {
    console.log (numb);
    numb++;
} while (numb < 5);

//цикл for ( ; ; )- проверяет условие перед каждой итерацией, есть возможность задать доп настройки
for (let numbe = 0; numbe < 5; numbe++) {
    console.log (numbe)
}

/*
работа цикла for:
1. выполняется начало let numbe = 0
2. выполняется условие numbe < 5
3. если условие true, то выполняется
тело цикла console.log (numbe)
4. выполняется шаг numbe++
5. повтор начиная с пункта 2
*/

//но правильно оформлять for
let numbere;
for (numbere = 0; numbere < 5; numbere++) {
    console.log (numbere);
}
console.log (`Вывод вне цикла: ${numbere}`);

//можно убрать любую часть цикла
let numberer = 0;
for ( ; numberer < 5; ) {
    console.log (numberer);
    numberer++;
}

//директива break
let nur = 0;
for (; nur <5; nur++) {
    console.log (nur);
    if (nur ==2) break;
}
console.log(`Работа завершена, nur= ${nur}`);

//директива continue
let nure = 0;
for (; nure <5; nure++) {
    if (nure ==2) continue;
    console.log (nure);
}

//метки
firstFor: for (let numi = 0; numi < 2; numi++) {
    for (let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;
        }
        console.log(size);
    }
}

//домашка

//задача 1
let norm = 1;
while (norm < 6) {
    console.log(norm);
    norm++;
}

//задача 2 - т.к. 0 - это false, то операция совершаться не будет, а значит и выводится 0 не будет
let nurm = 8;
while (nurm) {
    console.log (nurm);
    nurm--;
}

//задача 3
for (let nba = 0; nba < 3; nba++) {
    console.log (`Число: ${nba}`);
}

let nra = 0;
do {
    console.log (`Число: ${nra}`);
    nra++;
} while (nra < 3);

/*преобразование данных*/

//parseInt() - преобразование строки в число
let number1 = "4";
let number2 = "1";
let resul = parseInt (number1) + parseInt (number2);
console.log (resul);

//parseInt() - если смешанное содержимое, то метод все равно пытается преобразовать содержимое
let number3 = "88Oleg";
let number4 = parseInt (number3);
console.log (number4);

//parseFloat() - функция преобразования строк в дробные числа
let number5 = "3,14";
let number6 = "99,9";
let resu = parseFloat(number5) + parseFloat(number6);
console.log (resu);

//isNaN - функция для определения, является строка числом (если не число - true, иначе - false)
let number7 = "Oleg14"
let number8 = isNaN (number7);
console.log(number8);

//перевод чисел в любую систему (например в двоичную)
let number9 = "110";
let resaa = parseInt (number9, 2);
console.log (resaa); //число 6 в десятичной системе это 110 в двоичной

//пример
/*
let strSum = prompt("Введите сумму вклада"); //функция prompt() возвращает строку, поэтому требуется преобразование строки в число
let strPercent = prompt("Введите процентную ставку");
let sum = parseInt(strSum);
let procent = parseInt(strPercent);
sum = sum + sum * procent / 100;
alert("После начисления процентов сумма вклада составит: " + sum);
*/

/*массивы*/
 
// let myArray = new Array();
// или проще
// let myArray = [];

let myFriends = ["Sasha", "Vara", "Sergey"];
console.log(myFriends);
console.log(myFriends[0]); //т.к. счет индекса начинается с нуля, т.е. Sasha - 0, Vara - 1, Sergey - 2

let parentsNastya = ["Nadya", "Jura"];
parentsNastya [2] = "Vadim"; //можно установить элемент, который изначально не установлен
console.log(parentsNastya);

//spead-оператор ...
let points = [1, 2, 3, 4];
console.log(...points);    // и это не массив, а именно отдельные значения
console.log(points);  

//многомерные массивы
let myParents = [["Oleg", 60], ["Valya", 64]]
console.log(myParents[0]);
console.log("Возраст моей мамы " + myParents[1][1]) //64, т.к. у ["Valya", 64] индекс равен 1, и в нем 64 - тут тоже инжекс равен 1

let enemies = [
    ["Picachy", 312, "pokemon"],
    ["Kung Lao", 28, "fighter"],
    ["Hitler", 59, "nazi"]
];
enemies[2][1] = 70;
let ageHitler = enemies[2][1];
console.log(ageHitler);
console.log(enemies[1]);
