module.exports=function(modelo){
	return {
			registro:function(req,respuesta){
				modelo.sequelize.query("INSERT INTO usuario VALUES(NULL,'"+req.body.usuario+"','"+req.body.nombre+"','"+req.body.correo+"',MD5('"+req.body.password+"'));")
				.then(function(){
					respuesta.send({"mensaje":"Registro insertado correctamente","status":"200"});
				}).error(function(err){
					respuesta.send({"mensaje":"Error "+err,"status":"500"});
				});	
		},
		login:function(req,respuesta){
			modelo.sequelize.query("SELECT id,usuario,nombre,correo FROM usuario WHERE usuario.`usuario`='"+req.body.usuario+"' AND usuario.`password`=MD5('"+req.body.password+"');").then(function(data){
					respuesta.json(data);
			}).error(function(err){
				respuesta.send({"mensaje":"Error "+err,"status":"500"});
			});

		}
	}
}
