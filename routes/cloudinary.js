const { unlinkSync } = require ('fs');
const router = require ('express').Router();
const { upload, uploadToCloudinary } = require ('../controllers/upload');
const { Gallery } = require ('../models');




 router.post('/api/upload'), upload, async (req, res) => {
    const { file } = req;
    const result = await uploadToCloudinary(file.path, { folder: 'Trails' });

    if (file) unlinkSync(file.path);

    const data = {
        
        image_url: result.secure_url
    };

    const item = await Gallery.create (data);

    if (item) {
        return res.json(item);
    }
    return res.statusCode(404);
 }

 router.get ('/', async (req, res) => {
     const imageData = await Gallery.findAll({});
     const photos = imageData.map(item => item.get({ plain: true }));
   //need to figure out where we are rendering to
     //  res.render('home', { photos });
 })
//we need to come back to this so we can add the right handlebars page in
 module.exports = router;