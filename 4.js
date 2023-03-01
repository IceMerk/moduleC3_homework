// Задание 4
/*
Реализовать консольное приложение на прототипах

Определить иерархию электроприборов. Включить некоторые в розетку. 
Посчитать потребляемую мощность.

План:
1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
3. У каждого из приборов должны быть собственные свойства и желательно методы, отличные от родительских методов.
4. Создать экземпляры каждого прибора.
5. Вывести в консоль и посмотреть результаты работы, гордиться собой :)
*/

function Device(clasess, info) {
    this.clasess = clasess;
    this.info = info;
}

Device.prototype.getOn = function () {
    return `${this.name} - включен(a)`;
}

Device.prototype.getOff = function () {
    return `${this.name} - выключен(a)`;
}

Device.prototype.getInfo = function () {
    return `${this.name} находится ${this.info}`;
}


function KitchenDevice(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.getPower = function () {
        return this.type ? `${this.name} - потребляет ${this.power}кв/ч` : `Берем в руку ${this.name} и работаем`
    }
    this.getType = function () {
        return this.type ? `${this.name} работает от электричества` : `${this.name} для работы руками`
    }
}


function RoomDevice(name, type, power, light) {
    this.name = name;
    this.type = type;
    this.power = power;
    this.light = light;
    this.getPower = function () {
        return this.type ? `${this.name} - потребляет ${this.power} кв/ч и светит ${this.light}` : `${this.name} можно только сломать или потерять`
    }
    this.getSit = function () {
        return this.type ? `${this.name} работает от электричества, лучше не садиться` : `Садимся на ${this.name} и отдыхаем`
    }
}

KitchenDevice.prototype = new Device('Кухня', 'на кухне, можно приготовить еду и подкрепится');
RoomDevice.prototype = new Device('Комната', 'в комнате, можно отдохнуть и расслабиться');


const mikser = new KitchenDevice('Миксер', true, 220);
const fridge = new KitchenDevice('Холодильник', true, 90);
const knife = new KitchenDevice('Нож', false);

const tv = new RoomDevice('Телевизор', true, 200, 'ярко');
const lampa = new RoomDevice('Лампа', true, 200, 'ярко');
const sofa = new RoomDevice('Диван', false)

console.log(mikser.getOn())
console.log(fridge.getPower())
console.log(knife.getType())

console.log(tv.getInfo())
console.log(lampa.getPower())
console.log(sofa.getSit())


