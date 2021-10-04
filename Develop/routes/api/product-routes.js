const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products


  // find all products
  // be sure to include its associated Category and Tag data
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({  
      include: [{model: Category}, {model: Tag}], 
    })
    res.status(200).json(ProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// get one product

  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  router.get('/:id', async (req, res) => {
    try {
      const ProductData = await product.findByPk(req.params.id, {
        include: [{model: Category}, {model: Tag}],
      });
  
      if (!productData) {
        res.status(404).json({message: 'No tag found with that id!'});
        return;
      }
      res.status(200).json(productData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create new product
router.post('/', async (req, res) => {
//   try {
//     const productData = await Product.create(req.body);
//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// })
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  })

    router.put('/:id', async (req, res) => {
      // update product data
      try {
        const productData = await Product.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        if (!productData[0]) {
          res.status(404).json({ message: 'No product with this id!' });
          return;
        }
        res.status(200).json(productData);
      } catch (err) {
        res.status(500).json(err);
      }
    });


  // delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: { id: req.params.id },
  });
  if (!productData) {
    res.status(404).json({message: 'No product found with that id!'});
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});
module.exports = router;
