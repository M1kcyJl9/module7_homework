/*
Задание 5.
Переписать консольное приложение из предыдущего юнита на классы.
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/ 

class SmartHome {
    constructor(name, power, current) {
        this.type = 'Smart',
        this.name = name,
        this.power = power,
        this.current = current
        }
        whatPower() {
            console.log(`Мощность устройства ${this.name} - ${this.power} Вт`)
        }
        getThisObject() {
            console.log(this) 
        }
}

class Production extends SmartHome {
    constructor(manufacturer, name, power, current){
        super(name, power, current);
        this.manufacturer = manufacturer
    }
}

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

const roboRock = new Production ('Xiaomi', 'Пылесос', 58, true) // прототип Smarthome, с собственным свойством manufacturer
const xiaomiLight = new SmartHome ('Потолочная лампа', 15, true)
const gosundLedTape = new SmartHome ('Лэд лента', 3, true)

getSumCurrentOn() // ф-ия к-ая выводит потребляемую мощность всех приборов, если current  - true, значит прибор включен, false - значит выключен
roboRock.whatPower() // вывод мощности объекта с помощью метода объекта
xiaomiLight.whatPower() // вывод мощности объекта с помощью метода объекта
gosundLedTape.whatPower() // вывод мощности объекта с помощью метода объекта
console.log (roboRock) // выводим объект Пылесос, в нем свое св-во - manufacturer, все остальное унаследовано от Smarthome
console.log (xiaomiLight) // выводим объект Потолочная лампа
console.log (gosundLedTape) // выводим объект Лэд лента
roboRock.getThisObject() // вывод всего объекта с помощью метода объекта