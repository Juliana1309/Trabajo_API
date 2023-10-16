const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema ({

username: {
    type: String,
    required: true
},

password: {
   type: String,
   required: true
},
},
{
    timestamps: true

})

module.exports = customerSchema;

