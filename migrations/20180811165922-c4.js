'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.changeColumn(
     "subcategories",
     "categoryId",
     {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'categories',
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
