const express = require('express');
const bodyParser = require('body-parser');
var dataadapter = require('./apps/modules/dataadapter');
var logger = require('./apps/modules/log4js'); 
logger.init();

const app = express();
app.use(bodyParser.json());
app.set('views', __dirname + '/apps/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/public'));

var controller = require(__dirname + '/apps/controllers');
const port = 3000;
const a = 12;

app.use(controller);

dataadapter.mssql;
app.listen(port, function(){
    console.log('Server is running on port', port);
    if(logger != 0){
        logger.server().info('Server is running on port', port);
    }
});
