const seedLocations = require('./location-seeds');
const seedTrails = require('./trail-seeds');
const seedFeatures = require('./feature-seeds');
const seedTrailFeatures = require('./trail-feature-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedLocations();
  console.log('\n----- LOCATIONS SEEDED -----\n');

  await seedTrails();
  console.log('\n----- TRAILS SEEDED -----\n');

  await seedFeatures();
  console.log('\n----- FEATURES SEEDED -----\n');

  await seedTrailFeatures();
  console.log('\n----- TRAIL FEATURES SEEDED -----\n');

  process.exit(0);
};

seedAll();
