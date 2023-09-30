const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jsonwebtoken = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

const routers= require('./src/Routes/api')
// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// Apply security middleware
app.use(helmet());
app.use(hpp());
app.use(cors());
app.use(expressMongoSanitize());
const limiter = rateLimit({
  windowMs: 20 * 60 * 1000, 
  max: 100, 
});
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/',routers);
// Add a catch-all route for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

module.exports=app;