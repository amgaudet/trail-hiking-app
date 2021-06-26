const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Feature extends Model {}

// sets up fields and rules for Feature model
Feature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    feature_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    trail_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Trail",
          key: "id",
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Feature',
  }
);

module.exports = Feature;