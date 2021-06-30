const router = require('express').Router();
const NewTrail = require('../models/Dish');

//GET all new Trails
router.get('/', async (req, res) => {
  const newTrailData = await NewTrail.findAll().catch((err) => {
    res.json(err);
  });
  const newtrails = newTrailData.map((newtrail) => newtrail.get({ plain: true }));
  res.render('all', { newtrails });
});