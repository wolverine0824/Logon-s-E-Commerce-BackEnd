// this is bringing in the express router module
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');


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