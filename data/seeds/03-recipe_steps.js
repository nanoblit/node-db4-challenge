exports.seed = function (knex) {
  return knex('recipe_steps')
    .truncate()
    .then(() => knex('recipe_steps').insert([
      {
        step: 1,
        recipe_id: 1,
        ingredient_id: 1,
        amount: 3,
      },
      {
        step: 2,
        recipe_id: 1,
        ingredient_id: 2,
        amount: 4,
      },
      {
        step: 3,
        recipe_id: 1,
        ingredient_id: 3,
        amount: 1,
      },
      {
        step: 1,
        recipe_id: 2,
        ingredient_id: 4,
        amount: 5,
      },
      {
        step: 2,
        recipe_id: 2,
        ingredient_id: 5,
        amount: 13,
      },
      {
        step: 1,
        recipe_id: 3,
        ingredient_id: 6,
        amount: 4,
      },
      {
        step: 2,
        recipe_id: 3,
        ingredient_id: 5,
        amount: 2,
      },
      {
        step: 3,
        recipe_id: 3,
        ingredient_id: 1,
        amount: 6,
      },
      {
        step: 1,
        recipe_id: 4,
        ingredient_id: 8,
        amount: 3,
      },
      {
        step: 2,
        recipe_id: 4,
        ingredient_id: 3,
        amount: 2,
      },
      {
        step: 1,
        recipe_id: 5,
        ingredient_id: 7,
        amount: 3,
      },
      {
        step: 2,
        recipe_id: 5,
        ingredient_id: 4,
        amount: 5,
      },
      {
        step: 1,
        recipe_id: 6,
        ingredient_id: 2,
        amount: 2,
      },
      {
        step: 2,
        recipe_id: 6,
        ingredient_id: 5,
        amount: 5,
      },
      {
        step: 3,
        recipe_id: 6,
        ingredient_id: 1,
        amount: 7,
      },
      {
        step: 1,
        recipe_id: 7,
        ingredient_id: 4,
        amount: 2,
      },
      {
        step: 2,
        recipe_id: 7,
        ingredient_id: 2,
        amount: 4,
      },
    ]));
};
