const bicycleController = require('../../controllers/bicycle');
const router = require('express').Router();

module.exports = router
  .get('/index',bicycleController.index)
  .post('/new',bicycleController.new)
  .get('/:id',bicycleController.show)
  .put('/edit/:id',bicycleController.edit)
  .delete('/delete/:id',bicycleController.delete);
