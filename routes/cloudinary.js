const { unlinkSync } = require ('fs');
const router = require ('express').Router();
const { upload, uploadToCloudinary } = require ('../controllers/upload');
const { Gallery } = require ('../models');




router.post('/api/upload', upload, async (req, res) => {
    const { file } = req;
    const result = await uploadToCloudinary(file.path, { folder: 'images' });
   
    if (file) unlinkSync(file.path);
    const data = {
      name: file.originalname,
      description: '',
      url: result.secure_url
    };

    const item = await Gallery.create(data);

    if (item) {
      return res.json(item);
    }
    return res.statusCode(404);
  });
  
  router.get('/', async (req, res) => {
    const galleryData = await Gallery.findAll({});
    const photos = galleryData.map(item => item.get({ plain: true }));
    res.render('home', { photos });
  });

  //we need to come back to this so we can add the right handlebars page in
module.exports = router;