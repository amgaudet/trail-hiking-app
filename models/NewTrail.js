const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewTrail extends Model {}

NewTrail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nc_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty_level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stroller_accessible: {
      type: DataTypes.BOOLEAN,
    },
    restrooms: {
      type: DataTypes.BOOLEAN,
    },
    pet_friendly: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'newtrail',
  }
);

module.exports = NewTrail;