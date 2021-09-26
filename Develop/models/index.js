// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

product.hasOne(Category, {
  foreignkey: 'products_name',
  onDelete: 'CASCADE',
});


category.hasMany(Product, {
  foreignkey: 'Category_id',
});

product.hasMany(Tag, {
  through: {
    models: ProductTag,
    unique: false,
  },
});

tag.hasMany(Product, {
  through: {
    models: ProductTag,
    unique: false,
  },
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
