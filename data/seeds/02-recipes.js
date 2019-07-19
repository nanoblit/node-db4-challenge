exports.seed = function (knex) {
  return knex('recipes')
    .truncate()
    .then(() => knex('recipes').insert([
      { recipe_name: 'scropponi' },
      { recipe_name: 'pizza' },
      { recipe_name: 'apple pie' },
      { recipe_name: 'sugar cake' },
      { recipe_name: 'mystical orb residue' },
      { recipe_name: 'chicken essence' },
      { recipe_name: 'double wouble combo' },
    ]));
};
