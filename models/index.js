// import models
const Trail = require("./Trail");
const Location = require("./Location");
const Feature = require("./Feature");
const User = require("./User");
const TrailFeature = require("./TrailFeature");
const Gallery = require('./Gallery');
const UserTrails = require('./UserTrails');
const Upload = require('./Upload');
const NewTrail = require('./NewTrail');

// Trail belongsTo Location
Trail.belongsTo(Location, {
  foreignKey: "location_id",
  onDelete: "CASCADE",
});

// Location has many Trail
Location.hasMany(Trail, {
  foreignKey: "location_id",
});

// Trails belongToMany Features through trailFeatures 
Trail.belongsToMany(Feature, {
  through: {
    model: TrailFeature,
  },
  foreignKey: "trail_id",
});

Feature.belongsToMany(Trail, {
  through: {
    model: TrailFeature,
  },
  foreignKey: "feature_id",
});

Trail.hasMany(Gallery, {
  foreignKey: 'trail_id',
  onDelete: 'CASCADE',
});

User.belongsToMany(Trail, {
  through: {
    model: UserTrails,
  },
  foreignKey: "user_id",
});

Trail.belongsToMany(User, {
  through: {
    model: UserTrails,
  },
  foreignKey: "trail_id",
});

module.exports = {
  Trail,
  Location,
  User,
  Feature,
  TrailFeature,
  Gallery,
  UserTrails,
  Upload,
  NewTrail
  
};


