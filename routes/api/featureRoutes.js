const router = require('express').Router();
const { Feature, Trail } = require('../../models');

//GET all features
router.get('/', async (req, res) => {
  try {
    const featureData = await Feature.findAll({
      include: [Trail]
    });
    res.status(200).json(featureData);
  } catch (err) {
    res.status(500).json(err);
  };
});

//GET feature by ID
router.get('/:id', async (req, res) => {
  try {
    const featureData = await Feature.findByPk(req.params.id, {
      include: [Trail]
    });
    if (featureData) {
      return res.status(200).json(featureData);
    }
    res.status(404).json("No feature at that ID");
  } catch (err) {
    res.status(500).json(err)
  };
});

module.exports = router;