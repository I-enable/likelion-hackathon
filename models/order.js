const Sequelize = require('sequelize');

module.exports = class Order extends Sequelize.Model{
    static init(sequelize){
        return super.init({
			
            userId: {
                type: Sequelize.INTEGER(200)
            },
            orderDate: {
                type: Sequelize.DATE(6)
            },
            petId: {
                type: Sequelize.INTEGER(200)
            },
            petName: {
                type: Sequelize.STRING(500)
            },
            shopId: {
                type: Sequelize.INTEGER(200)
            },
            shopName: {
                type: Sequelize.STRING(500)
            },
            serviceName: {
                type: Sequelize.STRING(500)
            },
            amount: {
                type: Sequelize.INTEGER(200)
            }
		}, {
            sequelize,
            timestamps: false,
            modelName: 'Order',
            tableName: 'Orders',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.Order.belongsTo(db.Pet, {foreignKey: 'petId', targetKey: 'id'});
        db.Order.belongsTo(db.Shop, {foreignKey: 'shopId', targetKey: 'id'});
        db.Order.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'id'});
    }
};