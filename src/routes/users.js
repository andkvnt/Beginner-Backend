const express = require('express');
const router = express.Router();
const userController = require('../controller/users');
const protect = require('../middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh-token', userController.refreshToken);
router.post('/profile', userController.profile);

module.exports = router;
