const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/config.js");
const Tienda = require("./tienda.model.js");


// Definir el modelo Categoria
class Categoria extends Model {}

// Definir los atributos y configuraciones del modelo
Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.MEDIUMINT,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.SMALLINT,
        allowNull: false
    },
    adulto:{
        type:DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize, // Pasar la instancia de Sequelize
    modelName: 'Categoria', // Nombre del modelo en singular
    tableName: 'categorias', // Nombre de la tabla en plural
    timestamps: false // Desactivar la creación automática de timestamps
});

module.exports = Categoria;