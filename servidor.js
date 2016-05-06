(function(){
	var express=require('express');
	var morgan=require('morgan');
	var mysql=require('mysql');
	var bodyparser=require('body-parser');
	var puerto=3000;

	var app=express();

	
	var conf=require('./config');
	var pool=mysql.createPool(conf.database);
	app.set('pool',pool);
	app.use(morgan('dev'));
	app.use(bodyparser.urlencoded({
		extended:false
	}));
	
	app.use(bodyparser.json());
	app.use('/api/v1',require('./http')(app));


	app.listen(puerto,function(){
		console.log("El servidor Turismo esta corriendo en el puerto "+puerto);
	});
})();