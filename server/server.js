const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');
const eventRouter = require('./routes/events');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

console.log('MONGODB_URI:', mongoUri); // Debug log
console.log('JWT_SECRET:', jwtSecret); // Debug log

if (!mongoUri) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

if (!jwtSecret) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

mongoose.connect(mongoUri);

app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
