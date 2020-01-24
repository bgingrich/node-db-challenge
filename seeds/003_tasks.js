exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1 , task_description: 'Purchase supplies at Home Depot', completed: false},
        {id: 2, project_id: 1 , task_description: 'Plan setup of table and how many people will be able to sit at it.', completed: false},
        {id: 3, project_id: 1 , task_description: 'Cut and screw together wood.', completed: false},
        {id: 4, project_id: 2 , task_description: 'Build shoe rack out of dining table wood scraps.', completed: false},
        {id: 6, project_id: 3 , task_description: 'Get steak cooking with some butter and spices.', completed: false},
        {id: 5, project_id: 3 , task_description: 'Setup shoes on shoe rack.', completed: false},
        {id: 7, project_id: 3 , task_description: 'Cook steak on both sides until Medium Rare.', completed: false},
      ]);
    });
};