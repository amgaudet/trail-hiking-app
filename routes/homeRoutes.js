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
          model:Trail,
          include: [Gallery]
        }],
      });
      console.log(locationData);
      const locations = JSON.parse(JSON.stringify(locationData));

      res.render('search', {locations});
    } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/trailsgallery', async (req, res) => {
  res.render('trailsgallery')
});

router.get('/trail', async (req, res) => {
  res.render('trail')
});

router.get('/login', async (req, res) => {
  res.render('login')
});

router.get('/profile', async (req, res) => {
  res.render('profile')
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
