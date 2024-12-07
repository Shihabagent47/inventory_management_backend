const {Sequelize, DataTypes}=require('sequelize');

const sequelize=require('../db')

module.exports=sequelize.define(
    'Item',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },

        name:{
            type:DataTypes.STRING
        },

        category:{
            type:DataTypes.STRING
        },

        quantity:{
            type:DataTypes.INTEGER
        },

        price:{
            type:DataTypes.INTEGER
        },

        description:{
            type:DataTypes.STRING
        },
    }
)