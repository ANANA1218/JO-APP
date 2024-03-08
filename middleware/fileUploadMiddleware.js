// fileUploadMiddleware.js

import multer from 'multer';

// Définir le stockage pour les fichiers téléversés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Sauvegarder les fichiers téléversés dans le répertoire public/images
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliser le nom de fichier d'origine pour le fichier téléversé
  }
});

// Initialiser le middleware multer avec la configuration de stockage
const upload = multer({ storage: storage });

export default upload;
