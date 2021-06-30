const router = require('express').Router();
const { Location, Trail, Feature, Gallery, User } = require('../models');

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
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    let users = userData.map((user) => user.get({ plain: true }));

    if (req.session.user_id) {
      const loggedUser = await User.findByPk(req.session.user_id);
      let users = loggedUser.get({ plain: true });
      delete users.password;
    }

    res.render('homepage', { trails, locations, users, logged_in: req.session.logged_in });
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
    let users = userData.map((user) => user.get({ plain: true }));

    if (req.session.user_id) {
      const loggedUser = await User.findByPk(req.session.user_id);
      let users = loggedUser.get({ plain: true });
      delete users.password;
    }

    res.render('search', { location, locations, users, logged_in: req.session.logged_in });
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
  let users = userData.map((user) => user.get({ plain: true }));

  if (req.session.user_id) {
    const loggedUser = await User.findByPk(req.session.user_id);
    let users = loggedUser.get({ plain: true });
    delete users.password;
  }
  res.render('trailsgallery', { locations, users, logged_in: req.session.logged_in })
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
  let users = userData.map((user) => user.get({ plain: true }));

  if (req.session.user_id) {
    const loggedUser = await User.findByPk(req.session.user_id);
    let users = loggedUser.get({ plain: true });
    delete users.password;
  }

  res.render('trail', { locations, trail, users, logged_in: req.session.logged_in })
});

router.get('/login', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));
  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });
  let users = userData.map((user) => user.get({ plain: true }));

  if (req.session.user_id) {
    const loggedUser = await User.findByPk(req.session.user_id);
    let users = loggedUser.get({ plain: true });
    delete users.password;
  }
  res.render('login', { locations })
});

router.get('/profile', async (req, res) => {
  const getLocationData = await Location.findAll();
  const locations = getLocationData.map((location) => location.get({ plain: true }));

  const userData = await User.findAll({
    attributes: { exclude: ['password'] }
  });
  let users = userData.map((user) => user.get({ plain: true }));

  if (req.session.user_id) {
    const loggedUser = await User.findByPk(req.session.user_id);
    let users = loggedUser.get({ plain: true });
    delete users.password;
  }
  res.render('profile', { locations, users, logged_in: req.session.logged_in })
});

module.exports = router;
