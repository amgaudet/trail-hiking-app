const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserTrails extends Model {}


UserTrails.init(
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
        model: "trail",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_trails',
  }
);

module.exports = UserTrails;
