module.exports = (sequelize, type) => {
    return sequelize.define('log', {
        id: {
            type: type.UUID,
            primaryKey: true
        },
        detailType: type.STRING,
        source: type.STRING,
        time: type.DATE,
        detailMessage: type.STRING
    })
}