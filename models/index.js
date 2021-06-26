// import models
const Trail = require("./Trail");
const Location = require("./Location");
const Feature = require("./Feature");
const User = require("./User");

// Trail belongsTo Location
Trail.belongsTo(Location, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// Location has many Trail
Location.hasMany(Trail, {
  foreignKey: "location_id",
});

// Feature belongToMany Trail 
Feature.belongsToMany(Trail, {
  foreignKey: "feature_id",
});


module.exports = {
  Trail,
  Location,
  User,
  Feature,
};
