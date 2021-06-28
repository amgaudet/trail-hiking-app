const router = require('express').Router();
const featureRoutes = require('./featureRoutes');
const locationRoutes = require('./locationRoutes');
const trailRoutes = require('./trailRoutes');
const userRoutes = require('./userRoutes');

router.use('/features', featureRoutes)
router.use('/locations', locationRoutes);
router.use('/trails', trailRoutes);
router.use('/users', userRoutes);

module.exports = router;
