/*
Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

const obj1 = {
    name: "Sasha",
    surname: "Stoianov",
    age: 30,

}
const obj1Proto = Object.create(obj1)
obj1Proto.pets = true
obj1Proto.gender = "male"

function simple (obj1) {
    // У obj1 все ключи и значения только свои
    // for (let key in obj1){
    //     if (obj1.hasOwnProperty(key)){
    //         console.log(`Собственные свойства: ${(key)}, значения собственных свойств: ${(obj1[key])}`)
    //     }
    // }
    // У objProto есть свои ключи и значения, а есть унаследованные
    for (let key in obj1Proto){
    if (obj1Proto.hasOwnProperty(key)){
        console.log(`Собственные свойства: ${(key)}, значения собственных свойств: ${(obj1Proto[key])}`)
        }
    }
}
simple(obj1)