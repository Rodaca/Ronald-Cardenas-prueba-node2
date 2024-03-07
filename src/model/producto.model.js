const { Model,DataTypes } = require("sequelize")
const sequelize= require("../database/config.js")


class Producto extends Model {}

Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1 
    },
    kit: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0 
    },
    barcode: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    presentacion: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500), 
        allowNull: true 
    },
    foto: {
        type: DataTypes.STRING(120),
        allowNull: true 
    },
    peso: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
        defaultValue: 0.00
    }
},{
    sequelize,
    modelName: "Producto",
    tableName: 'productos',
    timestamps: false
});

module.exports = Producto;