const Person = require('./person');

module.exports = class Tenant extends Person {
    constructor(name, age, address, money){
        super(name, age, address, money);
    }

    applyForProperty(property) {
        property.setApplication(this);
    }

    rentProperty(property) {
        this.payDeposit(property);
        this.payRent(property);
    }

    payDeposit({deposit, owner}) {
        this.giveMoney(deposit);
        owner.receiveMoney(deposit);
    }

    payRent({rent, owner}) {
        this.giveMoney(rent);
        owner.receiveMoney(rent);
    }
}