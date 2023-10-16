const { Router } = require('express');
const   Customers = require('./customers.controller');


module.exports = (router) => {
router.post('/add', Customers.createCustomer);
router.get('./customers', Customers.getCustommers );



}