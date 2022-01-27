const Sequelize = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        operatorsAliases: false,

        pool: {
            max: parseInt(process.env.DB_POOL_MAX, 10),
            min: parseInt(process.env.DB_POOL_MIN, 10),
            acquire: parseInt(process.env.DB_POOL_ACQUIRE, 10),
            idle: parseInt(process.env.DB_POOL_IDLE, 10)
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pack = require("./pack")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);
db.role = require("./role")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db