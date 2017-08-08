const authController = require('../../controllers/auth');
const router = require('express').Router();

module.exports = router
  .get('/index',authController.index)
  .post('/login',authController.login)
  .post('/register',authController.register)
  .delete('/logout',authController.logout);
