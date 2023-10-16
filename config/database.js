const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;

//Custom console 
const connected = chalk.bold.cyan;
const error = chalk.bold.red;
const termination = chalk.bold.magenta;

module.exports = () => {
mongoose.connect(dbURL, {useNewUrlParser: true})
.then(() => console.log(connected('Mongo Connected! on', dbURL)))
.catch(error => console.log(error(`Connection has error ${err}`)))


process.on('SIGINT', () =>{

mongoose.connection.close(() => {
    
console.log('Mongoose is disconnected');

process.exit(0);


})


});

}

