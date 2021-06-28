const { unlinkSync } = require ('fs');
const router = require ('express').Router();
const { upload, uploadToCloudinary } = require ('../controllers/upload');
const db = require ('../models');




 router.post('/api/upload'), upload, async (req, res) => {
    const { file } = req;
    const result = await uploadToCloudinary(file.path, { folder: 'images' });

    if (file) unlinkSync(file.path);

    const data = {
        
        image_url: result.secure_url
    };

    const item = await db.Trail.create (data);

    if (item) {
        return res.json(item);
    }
    return res.statusCode(404);
 }

 router.get ('/', async (req, res) => {
     const imageData = await db.Trail.findAll({});
     const photos = imageData.map(item => item.get({ plain: true }));
     res.render('home', { photos });
 })
//we need to come back to this so we can add the right handlebars page in
 module.exports = router;