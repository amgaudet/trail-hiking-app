const { Feature } = require('../models');

const featureData = [
  {
    feature_name: 'waterfall',
  },
  {
    feature_name: 'overlook',
  },
  {
    feature_name: 'bird watching',
  },
  {
    feature_name: 'views',
  },
  {
    feature_name: 'river',
  },
  {
    feature_name: 'biking',
  },
  {
    feature_name: 'kid friendly',
  },
  {
    feature_name: 'restrooms',
  },
  {
    feature_name: 'stroller-friendly',
  },
];

const seedFeatures = () => Feature.bulkCreate(featureData);

module.exports = seedFeatures;
