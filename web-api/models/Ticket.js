module.exports = (sequelize, type) => {
    return sequelize.define('ticket', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        departament: type.STRING,
        registrationCode: type.INTEGER,
        description: type.STRING
    })
}