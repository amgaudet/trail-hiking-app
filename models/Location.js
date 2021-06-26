const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

// sets up fields and rules for Location model
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Location',
  }
);

module.exports = Location;