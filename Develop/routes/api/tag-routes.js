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
  
      if (!tagData) {
        res.status(404).json({message: 'No tag found with that id!'});
        return;
      }
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
  });
  if (!categoryData) {
    res.status(404).json({message: 'No category found with that id!'});
    return;
  }
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
  });
  if (!tagData) {
    res.status(404).json({message: 'No tag found with that id!'});
    return;
  }
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;
