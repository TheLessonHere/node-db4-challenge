
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: '1c Sugar' },
        { ingredient_name: '1c Flour' },
        { ingredient_name: '1 Egg' },
        { ingredient_name: '1c Butter' },
        { ingredient_name: '1c Milk' },
        { ingredient_name: '1c Chocolate Chips' },
        { ingredient_name: '1pk Noodles' },
        { ingredient_name: '1c Spaghetti Sauce' },
        { ingredient_name: '1 Spicy Meatball' }
      ]);
    });
};
