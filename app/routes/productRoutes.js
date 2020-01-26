var productController = require('../Controller/productController');
var middleware = require('../middleware/multer');
var router = require('express').Router();

module.exports = function () {
    const prodCtrl = new productController();
    router.post('/', middleware.upload.single('image'), prodCtrl.create);
    router.get('/', prodCtrl.getAllProducts);
  

    return router;
}