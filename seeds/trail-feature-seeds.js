const { TrailFeature } = require('../models');

const TrailFeatureData = [
  {
    trail_id: 1,
    feature_id: 1,
  },
  {
    trail_id: 1,
    feature_id: 3,
  },
  {
    trail_id: 1,
    feature_id: 4,
  },
  {
    trail_id: 1,
    feature_id: 5,
  },
  {
    trail_id: 1,
    feature_id: 7,
  },
  {
    trail_id: 2,
    feature_id: 4,
  },
  {
    trail_id: 2,
    feature_id: 5,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    trail_id: 2,
    feature_id: 9,
  },
  {
    trail_id: 2,
    feature_id: 3,
  },
  {
    trail_id: 3,
    feature_id: 6,
  },
  {
    trail_id: 3,
    feature_id: 4,
  },
  {
    trail_id: 3,
    feature_id: 3,
  },
  {
    trail_id: 4,
    feature_id: 3,
  },
  {
    trail_id: 4,
    feature_id: 4,
  },
  {
    trail_id: 4,
    feature_id: 2,
  },
  {
    trail_id: 5,
    feature_id: 7,
  },
  {
    trail_id: 5,
    feature_id: 6,
  },
  {
    trail_id: 5,
    feature_id: 5,
  },
  {
    product_id: 5,
    tag_id: 4,
  },
  {
    trail_id: 5,
    feature_id: 3,
  },
  {
    trail_id: 6,
    feature_id: 7,
  },
  {
    trail_id: 6,
    feature_id: 6,
  },
  {
    trail_id: 6,
    feature_id: 3,
  },
  {
    trail_id: 6,
    feature_id:1 ,
  },
  {
    trail_id: 6,
    feature_id: 5,
  },
  {
    trail_id: 6,
    feature_id: 4,
  },
  {
    trail_id: 7,
    feature_id: 7,
  },
  {
    trail_id: 7,
    feature_id: 1,
  },
  {
    trail_id: 7,
    feature_id: 5,
  }, 
  {
    trail_id: 7,
    feature_id: 4,
  },
  {
    trail_id: 8,
    feature_id: 2,
  },
  {
    trail_id: 8,
    feature_id: 4,
  }, 
  {
    trail_id: 9,
    feature_id: 7,
  },
  {
    trail_id: 9,
    feature_id: 6,
  },
  {
    trail_id: 9,
    feature_id: 3,
  },
  {
    trail_id: 9,
    feature_id: 4,
  },
  {
    trail_id: 10,
    feature_id: 2,
  },
  {
    trail_id: 10,
    feature_id: 3,
  },
  {
    trail_id: 10,
    feature_id: 4,
  },
  {
    trail_id: 11,
    feature_id: 7,
  },
  {
    trail_id: 11,
    feature_id: 3,
  },
  {
    trail_id: 11,
    feature_id: 5,
  },
  {
    trail_id: 11,
    feature_id: 4,
  },
  {
    trail_id: 12,
    feature_id: 7,
  },
  {
    trail_id: 12,
    feature_id: 1,
  },
  {
    trail_id: 12,
    feature_id: 4,
  },
  {
    trail_id: 12,
    feature_id: 6,
  },
  {
    trail_id: 13,
    feature_id: 7,
  },
  {
    trail_id: 13,
    feature_id: 5,
  },
  {
    trail_id: 13,
    feature_id: 1,
  },
  {
    trail_id: 13,
    feature_id: 4,
  },
  {
    trail_id: 14,
    feature_id: 2,
  },
  {
    trail_id: 14,
    feature_id: 3,
  },
  {
    trail_id: 14,
    feature_id: 4,
  },
  {
    trail_id: 15,
    feature_id: 6,
  },
  {
    trail_id: 15,
    feature_id: 5,
  },
  {
    trail_id: 15,
    feature_id: 3,
  },
  {
    trail_id: 16,
    feature_id: 2,
  },
  {
    trail_id: 16,
    feature_id: 1,
  },
  {
    trail_id: 16,
    feature_id: 5,
  },
  {
    trail_id: 17,
    feature_id: 2,
  },
  {
    trail_id: 17,
    feature_id: 3,
  },
  {
    trail_id: 18,
    feature_id: 4,
  },
  {
    trail_id: 18,
    feature_id: 3,
  },
  {
    trail_id: 19,
    feature_id: 2,
  },
  {
    trail_id: 19,
    feature_id: 7,
  },
  {
    trail_id: 19,
    feature_id: 4,
  },
  {
    trail_id: 20,
    feature_id: 5,
  },
  {
    trail_id: 20,
    feature_id: 7,
  },
  {
    trail_id: 20,
    feature_id: 4,
  },
  {
    trail_id: 21,
    feature_id: 5,
  },
  {
    trail_id: 21,
    feature_id: 1,
  },
  {
    trail_id: 21,
    feature_id: 4,
  },
];

const seedTrailFeatures = () => TrailFeature.bulkCreate(TrailFeatureData);

module.exports = seedTrailFeatures;
