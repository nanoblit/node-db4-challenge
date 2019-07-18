exports.up = function (knex) {
  return knex.schema
    .createTable('Ingredients', table => {
      table.increments();
      table
        .text('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipes', table => {
      table
        .increments()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .text('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipe_steps', table => {
      table.increments();
      table.integer('step').notNullable();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('indgredient');
      table.decimal('amount').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipes')
    .dropTableIfExists('Ingredients');
};
