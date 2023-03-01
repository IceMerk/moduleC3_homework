// Задание 3.1
/*
функция принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

function printObject(obj) {
    for (let x in obj) {
        if (obj.hasOwnProperty(x)) {
            console.log(x);
        }
    }
}

// Задание 3.2
/*
функция принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

function checkStrObj(str, obj) {
    if (obj.hasOwnProperty(str)) {
        return true;
    } else {
        return false;
    }
}

// Задание 3.3
/*
Написать функцию, которая создает пустой объект, но без прототипа
*/

function emptyObj() {
    return Object.create(null)
}
