const express = require('express');
const bodyParser = require('body-parser');
const LandlordService = require('./services/landlord-service');
const TenantService = require('./services/tenant-service');
const PropertyService = require('./services/property-service');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/landlord/all', async (req, res, next) => {
    const landlords = await LandlordService.findAll();
    res.render('landlord', { landlords });
});

app.post('/landlord', async (req, res, next) => {
    const landlord = await LandlordService.add(req.body);
    //console.log(req.body);
    res.send(landlord);
});

app.delete('/landlord/:landlordId', async (req, res, next) => {
    await LandlordService.del(req.params.landlordId);
    res.send('OK');
});

app.get('/tenant/all', async (req, res, next) => {
    const tenants = await TenantService.findAll();
    res.render('tenant', { tenants });
});

app.post('/tenant', async (req, res, next) => {
    const tenant = await TenantService.add(req.body);
    //console.log(req.body);
    res.send(tenant);
});

app.delete('/tenant/:tenantId', async (req, res, next) => {
    await TenantService.del(req.params.tenantId);
    res.send('OK');
});

app.get('/propety/all', async (req, res, next) => {
    const propeties = await PropetyService.findAll();
    res.render('propety', { propeties });
});

app.post('/propety', async (req, res, next) => {
    const propety = await PropetyService.add(req.body);
    //console.log(req.body);
    res.send(propety);
});

app.delete('/propety/:propetyId', async (req, res, next) => {
    await PropetyService.del(req.params.propetyId);
    res.send('OK');
});

app.listen(3000, () => {
    console.log('Server listening on post 3000');
});
