/**
 * 服务运行入口程序
 */
var express = require('express');
var app = express();
var serverConf=require('../conf/server');

app.disable('x-powered-by');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

var route=require('./route')(app);

app.listen(serverConf.port);
console.log('running at port',serverConf.port);