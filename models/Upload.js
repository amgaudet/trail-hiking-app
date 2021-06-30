const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Upload extends Model {}


  Upload.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    modelName: 'upload',
  });
  
  module.exports = Upload;