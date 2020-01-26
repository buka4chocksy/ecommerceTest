var categoryController = require('../Controller/categoryController');
var router = require('express').Router();

module.exports = function () {
    const catCtrl = new categoryController();
    router.post('/',  catCtrl.create);
    router.get('/',  catCtrl.getAll);
    router.get('/single',  catCtrl.getById);
    router.put('/',  catCtrl.updateCategoery);
    router.delete('/',  catCtrl.deleteCategoery);
  

    return router;
}