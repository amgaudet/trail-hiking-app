const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Gallery extends Model {}


  Gallery.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    image_name: { 
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    url:{
        type: DataTypes.STRING,
        allowNull:false,
  },
  trail_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "trail",
      key: "id",
    },
   },
}, 
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  });
  
  module.exports = Gallery;