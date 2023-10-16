const express = require('express');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const customersRoutes = require('./customers/customers.routes');
const db = require('./config/database');

//init db

db();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
const app = express();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//init routes
const router= express.Router();

//use express routes

app.use('/api' , router);
customersRoutes(router);


app.listen(properties.PORT, () => console.log(`server is running on ${properties.PORT}`));