var ruta=require('express').Router();


module.exports=(function(modelo){

	var usuario=require('../controller/ControladorUsuario.js')(modelo);
	ruta.get('/',function(peticion,respuesta){
		respuesta.send("Servidor Iniciado");
	});

	/* 
	1	Rutas para usuario
	*/
	ruta.post('/usuario/registro',usuario.registro);
	ruta.post('/usuario/login',usuario.login);

	/*
		Rutas para region
	*/

	
	return ruta;
});



