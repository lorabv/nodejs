const Landlord = require('./landlord');
const Tenant = require('./tenant');
const Property = require('./property');
const Database = require('./database');

const landlord = new Landlord('Lora', 30, 'Berlin', 300000);
const tenant = new Tenant('Brian', 40, 'Berlin', 6000);
const property = new Property('Berlin', 100000);

landlord.buyProperty(property);
property.setOwner(landlord)
landlord.properties[0].setDeposit(1000);
landlord.properties[0].setRent(500);
tenant.applyForProperty(property);
landlord.letProperty(property, tenant);
tenant.rentProperty(property);

Database.saveLandlord(landlord);
const loadFileLandlord = Database.loadLandlord();
console.log(loadFileLandlord);

Database.saveTenant(tenant);
const loadFileTenant = Database.loadTenant();
console.log(loadFileTenant);

Database.saveProperty(property);
const loadFileProperty = Database.loadProperty();
console.log(loadFileProperty);
