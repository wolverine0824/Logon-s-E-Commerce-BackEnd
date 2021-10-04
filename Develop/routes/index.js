// this is bringing in the express router module
const router = require('express').Router();
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');


// this is bringing in the api router module
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);
// this lets you know the route is not set up
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// this exports router
module.exports = router;