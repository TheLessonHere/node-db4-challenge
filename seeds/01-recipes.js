
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Cookies', 
        instructions: 'Mix wet and dry ingrediants seperately, bake at 350F.' },
        { recipe_name: 'Spaghetti and Meatballs',
        instructions: 'Boil noodles, mix with sauce and meatballs.' }
      ]);
    });
};
