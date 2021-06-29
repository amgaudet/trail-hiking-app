const router = require('express').Router();
const { Location, Trail, Feature } = require('../../models');

//GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [Trail]
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  };
});

//GET location by ID
router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [Trail]
    });

    const location = locationData.get({ plain: true });
    // res.render('search', location);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err)
  };
});

module.exports = router;