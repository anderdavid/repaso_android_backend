const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const app = express();
app.use(express.json());

const LoginController = require('./controllers/LoginController');

//router.post('/api/login', query('person').notEmpty(), LoginController.login);

module.exports = router;
