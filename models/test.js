'use strict';
module.exports = (sequelize, DataTypes) => {
  var test= sequelize.define('test', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement:true
    }
    ,
  }, {

  });

  test.associate = function(models) {
    test.belongsTo(models.product,{onDelete:"CASCADE"})
  };
  return test;
};