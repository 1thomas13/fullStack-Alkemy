const { Sequelize } = require('sequelize');

sequelize = new Sequelize('mariadb://root:@localhost:3306/fullstack-alkemy') 

module.exports = sequelize