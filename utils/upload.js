const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "storage", // nombre de la carpeta donde se almacenarán los archivos
/*     allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }] */
  }
});

const upload = multer({ storage: storage });

module.exports = upload
