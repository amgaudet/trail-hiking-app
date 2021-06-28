const { Gallery } = require('../models');

const galleryData = [
  {
    image_name: 'Hebron Falls',
    description: 'waterfall',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904018/Trails/Herbon-Falls_ljoc82.jpg',
    trail_id: 1,
},
  {
    image_name: 'Greenway Trail',
    description: 'path',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904019/Trails/Greenway-Trail_jx0ifn.jpg',
    trail_id: 2, 
},
  {
    image_name: 'Rocky Knob',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904011/Trails/Rocky-Knob_yuffdn.jpg',
    trail_id: 3,
},
  {
    image_name: 'Craven Gap',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904014/Trails/Craven-Gap_z1bndy.jpg',
    trail_id: 4,
},
  {
    image_name: 'Richmond Hill',
    description: 'creek',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904015/Trails/Richmond-Hill_khrcpj.jpg',
    trail_id: 5,
},
  {
    image_name: 'Hard Times',
    description: 'path',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904017/Trails/Hard-Times_cgz3ny.jpg',
    trail_id: 6,
},
  {
    image_name: 'Deep Creek',
    description: 'waterfall',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904020/Trails/Deep-Creek-Bryson_zkr1wg.jpg',
    trail_id: 7,
},
  {
    image_name: 'Lonesome Pine',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904019/Trails/Lonesome-Pine-Bryson_gie0hl.jpg',
    trail_id: 8,
},
  {
    image_name: 'Goldmine Loop',
    description: 'tunnel',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904017/Trails/Goldmine-Bryson_ktlue9.jpg',
    trail_id: 9,
},
  {
    image_name: 'Looking Glass',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904019/Trails/Looking-Glass-Brevard_agqvtc.jpg',
    trail_id: 10,
},
  {
    image_name: 'Pink Beds',
    description: 'meadow',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904016/Trails/Pink-Beds-Brevard_mvmfkq.jpg',
    trail_id: 11,
  },
  {
    image_name: 'Twin Falls',
    description: 'waterfall',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904012/Trails/Twin-Falls-Brevard_w2brep.jpg',
    trail_id: 12,
},
  {
    image_name: 'Triple Falls',
    description: 'waterfall',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904016/Trails/Triple-Falls-Hendersonville_vnlvt0.jpg',
    trail_id: 13,
  },
  {
    image_name: 'Stone Summit',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904009/Trails/Stone-Summit-Hendersonville_kzlq1m.jpg',
    trail_id: 14,
},
  {
    image_name: 'Oklawaha',
    description: 'river',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904011/Trails/Oklawaha-Hendersonville_jjrumg.jpg',
    trail_id: 15, 
  },
  {
    image_name: 'Pinnacle Trail',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904009/Trails/Pinnacle-Sylva_nggd8o.jpg',
    trail_id: 16,  
},
  {
    image_name: 'Blackrock Mountain',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904013/Trails/Blackrock-Sylva_kwlboi.jpg',
    trail_id: 17,
  },
  {
    image_name: 'Yellow Face',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904012/Trails/Yellow-Face-Sylva_flt9df.jpg',
    trail_id: 18,
},
  {
    image_name: 'Elk KNob',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904014/Trails/Elk-Summit-Banner-Elk_e3bzjp.jpg',
    trail_id: 19,
  },
  {
    image_name: 'Nuwati',
    description: 'overlook',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904011/Trails/Nuwhati-Banner-Elk_bcuspy.jpg',
    trail_id: 20,  
},
  {
    image_name: 'Lower Creek',
    description: 'creek',
    url: 'https://res.cloudinary.com/dije62fvf/image/upload/v1624904018/Trails/Lower-Creek_jbxm6i.jpg',
    trail_id: 21,
  }];

  const seedGallery = () => Gallery.bulkCreate(galleryData);

module.exports = seedGallery;