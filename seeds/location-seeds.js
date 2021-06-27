const { Location } = require('../models');

const locationData = [
  {
    location_name: 'Boone',
  },
  {
    location_name: 'Asheville',
  },
  {
    location_name: 'Bryson City',
  },
  {
    location_name: 'Brevard',
  },
  {
    location_name: 'Hendersonville',
  },
  {
    location_name: 'Sylva',
  },
  {
    location_name: 'Banner Elk',
  },
  
];

const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;
