/**
 * 路由设置
 */
var express = require('express');
var serveIndex=require('serve-index');
var path=require('path');

module.exports=function(app) {
	var staticPath=path.join(__dirname,'..','web','static');
	var viewPath=path.join(__dirname,'..','web','view');

	/* static */
	app.use('/static',express.static(staticPath));

	/* serveIndex */
	app.use('/static',serveIndex(staticPath,{'icons': true}));

	/* view */
	app.set('views',viewPath);
	app.get('/', function(req, res){
	  res.render('index', {
	    title: 'OMG'
	  });
	});
	app.get('/:page', function(req, res){
	  var pageName=req.params.page;
	  if(/^_/.test(pageName)){
	  	res.status(404).send("404 Not Found！");
	  	return;
	  }
	  res.render(pageName, {
	    title: 'OMG'
	  },function(err,html){
	  	if(err){
	  		if(err.path){
	  			res.status(500).send("Server Error");
	  			console.log(err);
	  		}else{
	  			res.status(404).send("404 Not Found！");
	  		}
	  	}else{
	  		res.end(html);
	  	}
	  });
	});

	/* API层路由 */
	require('../web/model/index')(app);

};