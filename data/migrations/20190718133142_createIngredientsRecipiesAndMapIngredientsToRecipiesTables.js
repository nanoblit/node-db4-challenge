exports.up = function (knex) {
  return knex.schema
    .createTable('ingredients', table => {
      table.increments();
      table
        .text('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('recipes', table => {
      table.increments();
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
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      table.decimal('amount').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
