var productRoutes = require('./productRoutes');

module.exports = function(router){
    router.use('/product', productRoutes())

 return router;
}