const router = require('express').Router();
const { Location } = require('../models');

router.get('/', async (req, res) => {
  try {
    const getLocationData = await Location.findAll();
    const locations = getLocationData.map((location) =>
      location.get({ plain: true })
    );
    res.render('homepage', { locations })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
