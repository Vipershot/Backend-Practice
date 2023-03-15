const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "storage", // nombre de la carpeta donde se almacenarán los archivos
    allowed_formats: ['jpg', 'png', 'jpeg'], // formatos de archivo permitidos
    transformation: [{ width: 500, height: 500, crop: 'limit' }] // opciones de transformación de imagen
  }
});

const upload = multer({ storage: storage });

module.exports = upload
