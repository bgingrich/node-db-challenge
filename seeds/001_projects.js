exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build Dining Room Table', project_description: 'Build a nice place to eat', completed: false},
        {id: 2, project_name: 'Build a shoe rack', project_description: 'Build a spot to store my shoes.', completed: false},
        {id: 3, project_name: 'Make Dinner', project_description: 'Prepare a nice meal to eat at the new dining room table.', completed: false},
      ]);
    });
}; 