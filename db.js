const Sequelize = require('sequelize')

const db = new Sequelize('arnavdemo', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})


const User = db.define('user', {        
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

db.sync()

module.exports = {
    db,
    User
}