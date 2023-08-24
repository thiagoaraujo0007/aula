module.exports = (sequelize,Sequelize) =>{
    const Items = sequelize.define("items",{
        name: {
            type:Sequelize.STRIG
        },
        description: {
            type:Sequelize.STRIG
        },
        quantity: {
            type:Sequelize.INTEGER
        },
        is_flammable: {
            type:Sequelize.BOOLEAN
            
        }
    });
    return Items;
};