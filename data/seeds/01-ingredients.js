exports.seed = function (knex) {
  return knex('ingredients')
    .truncate()
    .then(() => knex('ingredients').insert([
      { ingredient_name: 'broccoli' },
      { ingredient_name: 'spoons of salt' },
      { ingredient_name: 'apples' },
      { ingredient_name: 'blue mushrooms' },
      { ingredient_name: 'seaweed' },
      { ingredient_name: 'eggs' },
      { ingredient_name: 'spoons of moon sugar' },
      { ingredient_name: 'Spinach' },
    ]));
};
