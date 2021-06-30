const router = require('express').Router();
const { Location, Trail, Feature, Gallery } = require('../models');

router.get('/', async (req, res) => {
  try {
    const getLocationData = await Location.findAll();
    const locations = getLocationData.map((location) => location.get({ plain: true }));

    const trailData = await Trail.findAll({
      order: ['distance'],
      include: [Location, Gallery],
      limit: 4
    });
    const trails = trailData.map((trail) => {
      return trail.get({ plain: true });
    })

    res.render('homepage', { trails, locations });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/search/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{
        model: Trail,
        include: [Gallery]
      }],
    });
    console.log(locationData);
    const locations = JSON.parse(JSON.stringify(locationData));

    res.render('search', { locations });
  } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/trailsgallery', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));
  res.render('trailsgallery', { locations })
});

router.get('/trail/:id', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));

  const trailData = await Trail.findByPk(req.params.id, {
    include: [Feature, Gallery, Location]
  });
  const trail = trailData.get({ plain: true });

  res.render('trail', { locations, trail })
});

router.get('/login', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));
  res.render('login', { locations })
});

router.get('/profile', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));
  res.render('profile', { locations })
});





// router.get('/', async (req, res) => {
//   try {
//     const getTrailUrl = await Trail.findAll();
//     const trails = getTrailUrl.map((trail) =>
//       trail.get({ plain: true })
//     );
//     res.render('homepage', { trails })
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



module.exports = router;
