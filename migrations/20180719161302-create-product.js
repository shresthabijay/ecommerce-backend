'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      detail:{
        type:Sequelize.STRING,
      },
      price:{
        type:Sequelize.INTEGER,
      },
      subcategoryId:{
        type:Sequelize.INTEGER,
        references:{
          model:"subcategories",
          key:"id"
        }
      },
      categoryId:{
        type:Sequelize.INTEGER,
        references:{
          model:"categories",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};