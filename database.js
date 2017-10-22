const fs = require('fs');
var stringify = require('json-stringify-safe');

save = (file, person) => fs.writeFileSync(file, stringify(person));
load = file => JSON.parse(fs.readFileSync(file, 'utf8'));

const DATA_LANDLORD = './dataLandlord.json';
exports.saveLandlord = landlord => save(DATA_LANDLORD, landlord);
exports.loadLandlord = () => JSON.parse(fs.readFileSync(DATA_LANDLORD, 'utf8'));

const DATA_TENANT = './dataTenant.json';
exports.saveTenant = tenant => save(DATA_TENANT, tenant);
exports.loadTenant = () => JSON.parse(fs.readFileSync(DATA_TENANT, 'utf8'));

const DATA_PROPERTY = './dataProperty.json';
exports.saveProperty = property => save(DATA_PROPERTY, property);
exports.loadProperty = () => JSON.parse(fs.readFileSync(DATA_PROPERTY, 'utf8'));