// this is bringing in the tag model
const { Tag } = require('../models');
// this is the seed data for the tag model
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];
// 
const seedTags = () => Tag.bulkCreate(tagData);
// this exports seed tag
module.exports = seedTags;
