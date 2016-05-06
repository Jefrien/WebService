module.exports=function(app){
	return {
			registro:function(req,res){
				var pool=app.get('pool');
				pool.getConnection(function(err,connection){
					if(err){
						connection.release();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
					connection.query("INSERT INTO usuario VALUES(NULL,'"+req.body.usuario+"','"+req.body.nombre+"','"+req.body.correo+"',MD5('"+req.body.password+"'));",function(err,rows){
					if(err)
						throw err;
					else
						res.json({"mensaje":"Usuario "+req.body.nombre+" registrado correctamente."});
						connection.release();
					});
				});
			
		},
		login:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err,connection){
					if(err){
						connection.release();
						respuesta.json({"code":100,"status":"Error al conectar a la base de datos"});
					}
				connection.query("SELECT id,usuario,nombre,correo FROM usuario WHERE usuario.`usuario`='"+req.body.usuario+"' AND usuario.`password`=MD5('"+req.body.password+"');",function(err,rows){
					if(err)
						throw err;
					else
						res.json(rows);
						connection.release();
				});
			
		});
	}
}
}