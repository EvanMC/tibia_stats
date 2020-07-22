const mongoose = require('mongoose');

const {db_cosmos_username,db_cosmos_password,db_cosmos_connectionstring} = process.env;

mongoose
    .connect(
        db_cosmos_connectionstring,
        {auth:{user:db_cosmos_username,password:db_cosmos_password},useNewUrlParser:true},
    )
    .then(() => console.log('Successfully connected to the DB through the power of magic...'))
    .catch(console.error);