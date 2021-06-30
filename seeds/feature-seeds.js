const { Feature } = require('../models');

const featureData = [
  {
    feature_name: 'Waterfall',
  },
  {
    feature_name: 'Overlook',
  },
  {
    feature_name: 'Bird watching',
  },
  {
    feature_name: 'Views',
  },
  {
    feature_name: 'River',
  },
  {
    feature_name: 'Biking',
  },
  {
    feature_name: 'Kid friendly',
  },
  {
    feature_name: 'Restrooms',
  },
  {
    feature_name: 'Stroller-friendly',
  },
];

const seedFeatures = () => Feature.bulkCreate(featureData);

module.exports = seedFeatures;
