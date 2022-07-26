const { DataTypes } = require("sequelize");

/*
attributes model product
id = identificador úncio
name = nombre corto del producto
fullName = nombre largo del producto
gender = género (Masculino, Femenino, Unisex)
detail = descripción detallada del producto
imageURL = array de URL de imágenes
*/

module.exports = (sequelize) => {
  sequelize.define(
    "ventures",
    {
      id: {
        type: DataTypes.TEXT,
        allowNull: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      masterName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: { min: 0 },
      },
      imagecover: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imageurl: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      colors: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};