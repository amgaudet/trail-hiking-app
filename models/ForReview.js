const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ForReview extends Model { }

// sets up fields and rules for Trail model
ForReview.init(
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
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
    dog_friendly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    stroller_friendly: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      restrooms: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
  

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trail',
  }
);

module.exports = ForReview;