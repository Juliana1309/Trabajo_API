const customersModel = require('./customers.dao');
const Customers = require('./customers.dao');

exports.createCustomer = async(req, res, next) => {
const customers = {
username: req.body.username,
password: req.body.password,
};

try {

const createdcustomer = await Customers.create(customers);
res.json({message: 'Usuario registrado con éxito'});

}catch (err){
res.json({error:err});

}
    
}
exports.getCustommers= async(req, res, next) => {

try{
const createdcustomer = await Customers.get({});
res.staus(200).json({Customers: Customers});


}catch (err){
res.staus(500).json({error: 'Error en el servidor'});

}


};
