const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { morganMiddleware } = require('./middleware/logger');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/pdfs', require('./routes/pdfRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
