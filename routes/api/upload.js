const { unlinkSync } = require('fs');
const router = require('express').Router();
const { Gallery, Upload } = require('../../models');

const multer = require('multer');
const cloudinary = require('../../config/cloudinary');
const storage = multer.diskStorage({
    destination(req, file, cb) {
        console.log('cb1');
        cb(null, './tmp/');

    },
    filename(req, file, cb) {
        console.log('cb2');
        cb(null, file.fieldname + '-' + Date.now().toString().toLowerCase());
    }
});

const upload = multer({ storage }).single('file');

const uploadToCloudinary = (file, options) => {
    console.log('pro1');
    return new Promise((resolve, reject) => {
        console.log('pro2');
        cloudinary.uploader.upload(file, options, (error, result) => {
            return (result) ? resolve(result) : reject(error);
        });
    });
};

 router.post('/:id', upload, async (req, res) => {
    const { file } = req;
    const result = await uploadToCloudinary(file.path, { folder: 'Trails' });
    if (file) unlinkSync(file.path);
    const data = {
        url: result.secure_url,
        trail_id: req.params.id
    };
    const item = await Upload.create(data);
    if (item) {
        return res.json(item);
    }
    return res.statusCode(404);
 });

 router.get ('/', async (req, res) => {
     const imageData = await Upload.findAll({});
     const photos = imageData.map(item => item.get({ plain: true }));
   
      res.render('trail', { photos });
 });

 module.exports = router;