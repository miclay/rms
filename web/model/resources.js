/**
 * API-资源列表
 */
var url=require('url');
var utils = require('../lib/utils');

module.exports=function(app) {
	
	app.get('/api/resources',function(req,res){
		res.end(utils.json.prettify(req.query));
	});
	
};