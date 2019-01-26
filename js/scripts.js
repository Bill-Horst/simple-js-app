var repository = [
  {
    name: 'Bulbasaur',
    height: '7',
    types: ['grass', 'poison']
  },
  {
    name: 'Venusaur',
    height: '2',
    types: ['monster', 'grass']
  },
  {
    name: 'Squirtle',
    height: '5',
    types: ['monster', 'water']
  }
];

for (i = 0; i < repository.length; i++) {
  let pokeName = repository[i].name;
  let pokeHeight = repository[i].height;
  document.write('<h1>Name: ' + pokeName + ' (height: ' + pokeHeight + ')</h1>');
  if (pokeHeight > 4) {
    document.write('<h3>Wow, that\'s big!</h3>');
  }
}
