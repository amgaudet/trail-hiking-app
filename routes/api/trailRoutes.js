const router = require('express').Router();
const { Trail, Location, Feature, Gallery } = require('../../models');

//GET all trails
router.get('/', async (req, res) => {
  try {
    const trailData = await Trail.findAll({
      include: [{ model: Trail, model: Location, model: Feature, model: Gallery }]
    });
    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  };
});

//Top 4 trails for mainpage
router.get('/distance', async (req, res) => {
  try {
    const trailData = await Trail.findAll({
      order: ['distance'],
      include: [{ model: Trail, model: Location, model: Feature, model: Gallery }],
      limit: 4
    });
    const trail = await trailData.get({ plain: true });
    // res.render('homepage', trail);
    res.status(200).json(trailData);
  } catch (err) {
    res.status(500).json(err);
  };
});

//GET trail by ID
router.get('/:id', async (req, res) => {
  try {
    const trailData = await Trail.findByPk(req.params.id, {
      include: [{ model: Trail, model: Location, model: Feature, model: Gallery }]
    });
    const trail = trailData.get({ plain: true });
    // res.render('trail', trail);
  } catch (err) {
    res.status(500).json(err);
  };
});

//POST new trail -- NEEDS TO BE TESTED FOR RELATIONSHIPS
router.post('/', async (req, res) => {
  try {
    await Trail.create(req.body);
  } catch (err) {
    res.status(400).json(err);
  };
});

//UPDATE approved trail - put should only include switching approved to true
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