const express = require('express');
const { uploadPDF, getPDFs, getPDF } = require('../controllers/pdfController');
const { protect } = require('../middleware/auth');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Not a PDF file!'), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post('/upload', protect, upload.single('pdf'), uploadPDF);
router.get('/', protect, getPDFs);
router.get('/:id', protect, getPDF);

module.exports = router;
