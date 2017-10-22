module.exports = class Person {
    constructor(name, age, address, money = 0){
        this.name = name;
        this.age = age;
        this.address = address;
        this.money = money;
    }

    receiveMoney(amount) {
        this.money = this.money + amount;
    }

    giveMoney(amount) {
        this.money = this.money - amount;
    }
}