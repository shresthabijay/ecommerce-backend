'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    detail:{
      type:DataTypes.STRING
    }
    
  }, {});
  category.associate = function(models) {
    category.hasMany(models.subcategory,{onDelete:"CASCADE"})
    category.hasMany(models.product,{onDelete:"CASCADE"})
  };
  return category;
};