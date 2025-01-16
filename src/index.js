const express = require('express');

const {ServerConfig} = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);
app.listen(3001, ()=> {
    console.log(`Successfully started the server on PORT`)
});


