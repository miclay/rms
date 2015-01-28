/**
 * 服务运行入口程序
 */

var express = require('express');
var app = express();
var serveIndex=require('serve-index');
var cwd = process.cwd();
var serverConf=require('../conf/server');

app.disable('x-powered-by');

var route=require('./route')(app);

app.use('/', express.static(cwd + '/web/static'));
app.use(serveIndex(cwd + '/web/static',{'icons': true}));

app.listen(serverConf.port);
console.log('running at port',serverConf.port);