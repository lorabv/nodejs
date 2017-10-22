module.exports = class Property {
    constructor(address, price = 0, owner = {}, rent = 0, deposit = 0, tenant = {}) {
        this.address = address;
        this.owner = owner;
        this.price = price;
        this.rent = rent;
        this.deposit = deposit;
        this.tenant = tenant;
        this.applications = [];
    }

    setApplication({name, age, address}){
        this.applications.push({name, age, address});
    }

    getApplications(){
        return this.applications;
    }

    setOwner(person) {
        this.owner = person;
    }

    setTenant(person) {
        this.tenant = person;
    }

    setDeposit(amount) {
        this.deposit = amount;
    }

    setRent(amount) {
        this.rent = amount;
    }
}