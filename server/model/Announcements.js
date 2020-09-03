const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Announcements extends Model {};

Announcements.init({
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Announcements",
});

Announcements.sync();

module.exports = Announcements;