require('dotenv').config();
require('./server/db-conn');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./client/tibia-azure-example/build/'));
app.use('/api/thoughts/', require('./server/routes/thoughts-route'));

app.get('/', (req, res) => {
    res.sendFile('index.html',{root:'./client/tibia-azure-example/build/'});
});

const {PORT} = process.env;
app.listen(PORT, () => console.log('Wizardry happening on port ${PORT}'));