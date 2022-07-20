const sequelize = require("sequelize");
const {DataTypes} =  require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "products",{
            name : {
                type: DataTypes.STRING,
                allowNull: true,
                    },
            price : {
                type: DataTypes.INTEGER,
                allowNull: false,
                    },
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey :true
                },
        
        }
    )
}