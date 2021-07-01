const router = require('express').Router();
const { Location, Trail, Feature, Gallery, User, NewTrail, Upload } = require('../models');

//GET all new Trails
router.get('/new-trails', async (req, res) => {
  const newTrailData = await NewTrail.findAll();
  const newtrails = newTrailData.map((newtrail) => newtrail.get({ plain: true }));
  res.render('new-trails', { newtrails });
});

router.get('/', async (req, res) => {
  try {
    const getLocationData = await Location.findAll();
    const locations = getLocationData.map((location) => location.get({ plain: true }));

    const trailData = await Trail.findAll({
      order: ['distance'],
      include: [Location, Gallery],
      limit: 8
    });
    const trails = trailData.map((trail) => {
      return trail.get({ plain: true });
    })

    //grabs session user info to display on page
    let loggedUser = {};
    if (req.session.user_id) {
      loggedUser = await User.findByPk(req.session.user_id);
      loggedUser = loggedUser.get({ plain: true });
      delete loggedUser.password;
    }

    res.render('homepage', { trails, locations, loggedUser, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/search/:id', async (req, res) => {
  try {
    const getLocationData = await Location.findAll();
    const locations = getLocationData.map((location) => location.get({ plain: true }));

    const locationData = await Location.findByPk(req.params.id, {
      include: [{
        model: Trail,
        include: [Gallery]
      }],
    });

    const location = JSON.parse(JSON.stringify(locationData));

    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });

    //grabs session user info to display on page
    let loggedUser = {};
    if (req.session.user_id) {
      loggedUser = await User.findByPk(req.session.user_id);
      loggedUser = loggedUser.get({ plain: true });
      delete loggedUser.password;
    }

    res.render('search', { location, locations, loggedUser, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err)
  };
});

router.get('/trailsgallery', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));

  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });

  //grabs session user info to display on page
  let loggedUser = {};
  if (req.session.user_id) {
    loggedUser = await User.findByPk(req.session.user_id);
    loggedUser = loggedUser.get({ plain: true });
    delete loggedUser.password;
  }

  res.render('trailsgallery', { locations, loggedUser, logged_in: req.session.logged_in })
});

router.get('/trail/:id', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));

  const trailData = await Trail.findByPk(req.params.id, {
    include: [Feature, Gallery, Location]
  });
  const trail = trailData.get({ plain: true });

  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });

  //grabs session user info to display on page
  let loggedUser = {};
  if (req.session.user_id) {
    loggedUser = await User.findByPk(req.session.user_id);
    loggedUser = loggedUser.get({ plain: true });
    delete loggedUser.password;
  }

  const uploadedImagesData = await Upload.findAll({ where: { trail_id: req.params.id } });

  const uploads = uploadedImagesData.map(o => o.get({ plain: true }));

  res.render('trail', { locations, trail, loggedUser, uploads, logged_in: req.session.logged_in })
});

router.get('/login', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));
  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });

  res.render('login', { locations })
});

router.get('/profile', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));

  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });

  //grabs session user info to display on page
  let loggedUser = {};
  if (req.session.user_id) {
    loggedUser = await User.findByPk(req.session.user_id);
    loggedUser = loggedUser.get({ plain: true });
    delete loggedUser.password;
  }
  res.render('profile', { locations, loggedUser, logged_in: req.session.logged_in })
});

module.exports = router;
