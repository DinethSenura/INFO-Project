const PDF = require('../models/pdf');

exports.uploadPDF = async (req, res) => {
  const { filename, path, size } = req.file;
  try {
    const pdf = await PDF.create({
      user: req.user.id,
      filename,
      path,
      size,
    });
    res.status(201).json(pdf);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPDFs = async (req, res) => {
  try {
    const pdfs = await PDF.find({ user: req.user.id });
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPDF = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);
    if (pdf) {
      res.status(200).sendFile(pdf.path, { root: '.' });
    } else {
      res.status(404).json({ message: 'PDF not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
