const Person = require('./person');

module.exports = class Landlord extends Person {
    constructor(name, age, address, money, properties){
        super(name, age, address, money);
        this.properties = [];
    }

    static create(obj) {
        return new Landlord(obj.name, obj.age, obj.address, obj.money, obj.properties);
    }

    buyProperty(property) {
        this.properties.push(property);
    }

    letProperty(property, tenant) {
        property.setTenant(tenant);
    }
}