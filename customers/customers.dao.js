const mongoose =require('mongoose');
const customerSchema= require('./customers.model');

customerSchema.static={
create: function(data, cb){

    const customers = new this(data);
    customers.save(cb);

},
  
get:function (query, cb){
this.fin(query, cb);

},

}

const customersModel = mongoose.model('Customers', customerSchema);
module.exports = customersModel;
 