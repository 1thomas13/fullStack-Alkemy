const sequelize = require('../config/connection.js')

const User = require('./user.js');
const Operation = require('./Operation.js');

User.hasMany(Operation, { foreignKey: 'userId' })

;(async () => {
    await sequelize.sync({ force: true });
    console.log('Database & tables created!')

})()

module.exports = {Operation, User}