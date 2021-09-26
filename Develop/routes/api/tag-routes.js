const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
  router.get('/', async (req, res) => {
    try {
      const TagData = await Tag.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(TagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    try {
      const TagData = await Tag.findByPk(req.params.id, {
        include: [{model: Product}],
      });
  
      if (!CategoryData) {
        res.status(404).json({message: 'No category found with that id!'});
        return;
      }
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
