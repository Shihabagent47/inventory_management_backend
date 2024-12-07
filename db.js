const path = require('path');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('mysql://root:@localhost:3306/inventory_management')