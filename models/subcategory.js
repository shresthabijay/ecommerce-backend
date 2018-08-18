'use strict';
module.exports = (sequelize, DataTypes) => {
  var subcategory = sequelize.define('subcategory', {
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    detail:{
      type:DataTypes.STRING
    }
    ,
  }, {});
  subcategory.associate = function(models) {
    subcategory.belongsTo(models.category,{onDelete:"CASCADE"})
    subcategory.hasMany(models.product,{onDelete:"CASCADE"})
  };
  return subcategory;
};