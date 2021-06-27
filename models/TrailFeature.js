const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TrailFeature extends Model {}

// sets up fields and rules for TrailFeature model
TrailFeature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    trail_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Trail",
        key: "id",
      },
    },
    feature_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Feature",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trail_Feature',
  }
);

module.exports = TrailFeature;
