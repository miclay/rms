/**
 * 路由设置
 */

var express = require('express');

module.exports=function(app) {
	
	app.get('/test',function(req,res){
		console.log(res);
	});

	/* API层路由 */
	require('../web/model/index')(app);

};