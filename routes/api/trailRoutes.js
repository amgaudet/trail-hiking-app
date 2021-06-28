const router = require('express').Router();
const { Trail, Location, Feature } = require('../../models');

//GET all trails
router.get('/', async (req, res) => {
  try {
    const trailData = await Trail.findAll({
      include: [Trail, Location]
    });
    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  };
});

//GET trail by ID
router.get('/:id', async (req, res) => {
  try {
    const trailData = await Trail.findByPk(req.params.id, {
      include: [Trail, Location]
    });
    const trail = trailData.get({ plain: true });
    res.render('trail', trail);
  } catch (err) {
    res.status(500).json(err);
  };
});

//POST new trail
router.post('/', async (req, res) => {
  try {
    await Trail.create(req.body);
  } catch (err) {
    res.status(400).json(err);
  };
});

//UPDATE approved trail
router.put('/:id', async (req, res) => {
  try {
    const updatedTrail = await Trail.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(updatedTrail)
  } catch (err) {
    res.status(400).json(err);
  };
});


module.exports = router;