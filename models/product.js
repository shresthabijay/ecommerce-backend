'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('product', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    detail:{
      type:DataTypes.STRING,
    },
    price:{
      type:DataTypes.INTEGER,
    },
  }, {});
  product.associate = function(models) {
    product.belongsTo(models.category)
    product.belongsTo(models.subcategory)
  };
  return product;
};