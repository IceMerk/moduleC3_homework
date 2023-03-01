// Задание 5
/*
Переписать консольное приложение из 4 задания на классы.
*/


class Device {
    constructor(classes, info) {
        this.classes = classes;
        this.info = info;
    }

    getOn() {
        return `${this.name} - включен(a)`;
    }
    getOff() {
        return `${this.name} - выключен(a)`;
    }
    getInfo() {
        return `${this.name} находится ${this.info}`;
    }
}

class KitchenDevice extends Device {
    constructor(name, type, power, clasess, info) {
        super(clasess, info);
        this.name = name;
        this.type = type;
        this.power = power;
    }

    getPower() {
        if (this.type) {
            return `${this.name} - потребляет ${this.power}кв/ч`;
        } else {
            return `Берем в руку ${this.name} и работаем`;
        }
    }

    getType() {
        if (this.type) {
            return `${this.name} работает от электричества`;
        } else {
            return `${this.name} для работы руками`;
        }
    }
}

class RoomDevice extends Device {
    constructor(name, type, power, light, clasess, info) {
        super(clasess, info);
        this.name = name;
        this.type = type;
        this.power = power;
        this.light = light;
    }

    getPower() {
        if (this.type) {
            return `${this.name} - потребляет ${this.power} кв/ч и светит ${this.light}`;
        } else {
            return `${this.name} можно только сломать или потерять`;
        }
    }

    getSit() {
        if (this.type) {
            return `${this.name} работает от электричества, лучше не садиться`;
        } else {
            return `Садимся на ${this.name} и отдыхаем`;
        }
    }
}

const kitchen = ['Кухня', 'на кухне, можно приготовить еду и подкрепится']
const room = ['Комната', 'в комнате, можно отдохнуть и расслабиться']

const mikser = new KitchenDevice('Миксер', true, 220, ...kitchen);
const fridge = new KitchenDevice('Холодильник', true, 90, ...kitchen);
const knife = new KitchenDevice('Нож', false, undefined, ...kitchen);

const tv = new RoomDevice('Телевизор', true, 200, 'ярко', ...room);
const lampa = new RoomDevice('Лампа', true, 200, 'ярко', ...room);
const sofa = new RoomDevice('Диван', false, undefined, ...room)

console.log(mikser.getOn())
console.log(fridge.getPower())
console.log(knife.getType())

console.log(tv.getInfo())
console.log(lampa.getPower())
console.log(sofa.getSit())