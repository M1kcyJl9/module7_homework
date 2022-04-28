/*
Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

const str = "name"
const obj = {
    name: "Sasha",
    surname: "Stoianov",
    age: 30,
}
function double (str, obj){
    for (let key in obj) {
        if (str == key){
            console.log(`Да, строка ${str}, совпадает со свойством ${key}`)
        }else{
            console.log(`Строка ${str} не совпадает со свойством ${key}`)
        }
    }
}
double(str, obj)