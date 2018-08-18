'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn(
      "products",
      "subcategoryId",
      {
       type: Sequelize.INTEGER,
       onDelete: 'CASCADE',
       references: {
         model: 'subcategories',
         key: 'id'
       }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
