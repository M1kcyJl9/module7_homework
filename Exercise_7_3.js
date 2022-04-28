/*
Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/
function triple (){
    const obj = new Object() // пустой объект со свойствами
    const emptyObj = Object.create(null) // пустой объект без  свойств
    console.log (obj)
    console.log (emptyObj)
}
triple()
