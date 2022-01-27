module.exports = (sequelize, type) => {
    return sequelize.define('packs', {

        name: type.STRING,
        description: type.TEXT,


    })
}