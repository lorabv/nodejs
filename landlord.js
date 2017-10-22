const Person = require('./person');

module.exports = class Landlord extends Person {
    constructor(name, age, address, money, properties){
        super(name, age, address, money);
        this.properties = [];
    }

    buyProperty(property) {
        this.properties.push(property);
    }

    letProperty(property, tenant) {
        property.setTenant(tenant);
    }
}