var productRoutes = require('./productRoutes');
var categoryRoutes = require('./categoryRoutes');
module.exports = function(router){
   router.use('/category', categoryRoutes())
   router.use('/product', productRoutes())

 return router;
}