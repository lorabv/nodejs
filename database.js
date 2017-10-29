const fs = require('fs');
var stringify = require('json-stringify-safe');

const saveFile = async (file, obj) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, stringify(obj), (err, contents) => {
            if (err) return reject(err);

            resolve(contents);
        })
    })
}

const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, contents) => {
            if (err) return reject(err);

            resolve(JSON.parse(contents));
        })
    })
}

const DATA_LANDLORD = './dataLandlord.json';
exports.saveLandlords = async (landlord) => await saveFile(DATA_LANDLORD, landlord);
exports.loadLandlords = async () => await readFile(DATA_LANDLORD);

const DATA_TENANT = './dataTenant.json';
exports.saveTenants = async (tenant) => await saveFile(DATA_TENANT, tenant);
exports.loadTenants = async () => await readFile(DATA_TENANT);

const DATA_PROPERTY = './dataProperty.json';
exports.saveProperties = async (property) => await saveFile(DATA_PROPERTY, property);
exports.loadProperties = async () => await readFile(DATA_PROPERTY);