// this imports model and data types
const { Model, DataTypes } = require('sequelize');
// this imports sequelize
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
       type:DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
      },
      category_name: {
        type:DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
