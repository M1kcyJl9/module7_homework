/*
Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определить иерархию электроприборов. 
Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, гордиться собой :)
Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и т.д.
*/
function SmartHome (name, power, current){
    this.type = 'Smart',
    this.name = name, 
    this.power = power,
    this.current = current
    this.whatPower = function(){
        console.log (`Мощность устройства ${this.name} - ${this.power} Вт`)
    },
    this.getThisObject = function(){console.log (this)}
}

SmartHome.prototype.sumCurrent = function(){
        let sum = roboRock.power + xiaomiLight.power + gosundLedTape.power
        console.log (`Сумарная мощность всех приборов: ${sum} Вт, а текущего ${this.power}`)
        return sum
}

function Production (manufacturer, name, power, current){
    this.manufacturer = manufacturer
    this.name = name, 
    this.power = power,
    this.current = current
}
Production.prototype = new SmartHome()

function getSumCurrentOn(){
    if (roboRock.current === false && xiaomiLight.current === true && gosundLedTape.current === true){
        sum = xiaomiLight.power + gosundLedTape.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === true && xiaomiLight.current === false && gosundLedTape.current === true) {
        sum = roboRock.power + gosundLedTape.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === true && xiaomiLight.current === true && gosundLedTape.current === false){
        sum = roboRock.power + xiaomiLight.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if(roboRock.current === false && xiaomiLight.current === false && gosundLedTape.current === true){
        sum = gosundLedTape.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === false && xiaomiLight.current === false && gosundLedTape.current === false){
        sum = 0
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === true && xiaomiLight.current === true && gosundLedTape.current === true){
        sum = roboRock.power + xiaomiLight.power + gosundLedTape.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === false && xiaomiLight.current === true && gosundLedTape.current === false){
        sum = xiaomiLight.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else if (roboRock.current === true && xiaomiLight.current === false && gosundLedTape.current === false){
        sum = roboRock.power
        console.log (`Суммарная мощность всех включенных приборов: ${sum}`)
    }else{
        console.log (`Видимо ошибка, либо доработайте программу`)
    }
}

const roboRock = new Production ('Xiaomi', 'Пылесос', 58, false) // прототип Smarthome, с собственным свойством manufacturer
const xiaomiLight = new SmartHome ('Потолочная лампа', 15, false)
const gosundLedTape = new SmartHome ('Лэд лента', 3, true)

getSumCurrentOn() // ф-ия к-ая выводит потребляемую мощность всех приборов, если current  - true, значит прибор включен, false - значит выключен

console.log (roboRock) // выводим объект Пылесос, в нем свое св-во - manufacturer, все остальное унаследовано от Smarthome
console.log (xiaomiLight) // выводим объект Потолочная лампа
console.log (gosundLedTape) // выводим объект Лэд лента
// roboRock.sumCurrent() // запуск ф-ии подсчёта суммы мощностей всех приборов при условии, что они включены, и вывод в консоль мощность текущего
// xiaomiLight.sumCurrent() // запуск ф-ии подсчёта суммы мощностей всех приборов при условии, что они включены, и вывод в консоль мощность текущего
// gosundLedTape.sumCurrent() // запуск ф-ии подсчёта суммы мощностей всех приборов при условии, что они включены, и вывод в консоль мощность текущего
// roboRock.getThisObject() // вывод всего объекта с помощью метода объекта