
const {DataTypes} =  require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "products",{
            id: {
                type: DataTypes.TEXT,
                allowNull: true,
                primaryKey: true,
              },
            name : { 
                type: DataTypes.STRING,
                allowNull: true,
                    },
            price : {     
                type: DataTypes.INTEGER, 
                allowNull: false, 
                    }, 
        }
    )
}