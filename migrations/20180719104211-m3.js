'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("subcategories","categoryId",{
      type:Sequelize.INTEGER,
      references:{
        model:"categories",
        key:"id"
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("subcategories","categoryId")
  }
};
