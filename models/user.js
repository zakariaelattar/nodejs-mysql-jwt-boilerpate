module.exports = (sequelize, type) => {
    return sequelize.define('users', {

        username: type.STRING,
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        password: type.STRING,
        address: type.STRING,
        city: type.STRING,
        phone: type.STRING,
        country: type.STRING,
        pack_id: type.INTEGER,
    })
}