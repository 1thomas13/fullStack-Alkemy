const sequelize = require('../config/connection.js') 
const { DataTypes } = require('sequelize') 

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
  }, {
    timestamps: false
});

module.exports = User

