/**
 * API-资源列表
 */

var express = require('express');

module.exports=function(app) {
	
	app.get('/api/resources',function(req,res){
		var data={
			a:1,
			b:{
				c:2
			}
		};
		res.end(JSON.stringify(data,'','  '));
	});
	
};