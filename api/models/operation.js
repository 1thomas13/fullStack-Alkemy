const sequelize = require('../config/connection.js') 
const { DataTypes } = require('sequelize') 

const Operation = sequelize.define('Operation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    amount: {
        type: DataTypes.INTEGER
    },
    category: {
        type: DataTypes.STRING
    },
    date: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false
});

module.exports = Operation