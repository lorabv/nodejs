const Landlord = require('./landlord');
const Tenant = require('./tenant');
const Property = require('./property');
const Database = require('./database');

const landlords = [];
const tenants = [];
const properties = [];

const landlord = new Landlord('Lora', 30, 'Berlin', 300000);
landlords.push(landlord);
const tenant = new Tenant('Brian', 40, 'Berlin', 6000);
tenants.push(tenant);
const property = new Property('Berlin', 100000);
properties.push(property);

landlord.buyProperty(property);
property.setOwner(landlord)
landlord.properties[0].setDeposit(1000);
landlord.properties[0].setRent(500);
tenant.applyForProperty(property);
landlord.letProperty(property, tenant);
tenant.rentProperty(property);

Database.saveLandlord(landlords);
const loadLandlords = Database.loadLandlord();
const convertedLandlords = loadLandlords.map(Landlord.create);
console.log(convertedLandlords);

Database.saveTenant(tenants);
const loadTenants = Database.loadTenant();
const convertedTenants = loadTenants.map(Tenant.create);
console.log(convertedTenants);

Database.saveProperty(properties);
const loadProperties = Database.loadProperty();
const convertedProperties = loadProperties.map(Property.create);
console.log(convertedProperties);
