const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Trail extends Model {}

// sets up fields and rules for Trail model
Trail.init(
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
    distance: {
        type: DataTypes.INTEGER,
        decimalNumbers: true,
        allowNull: false,
        validate: {
          isDecimal: true,
        },
      },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    pet_friendly: {
        type: DataTypes.BOOLEAN, 
        allowNull: false,
    },
    elevation_gain: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Location",
          key: "id",
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trail',
  }
);

module.exports = Trail;