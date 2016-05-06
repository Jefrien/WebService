module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usuario: {
			type: DataTypes.STRING,
			allowNull: true
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: true
		},
		correo: {
			type: DataTypes.STRING,
			allowNull: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'usuario',
		timestamps:false
	});
};