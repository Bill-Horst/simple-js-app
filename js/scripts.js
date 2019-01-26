(function() {

  var pokemonRepository = (function() {

    var pokemonRepository = [
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

    function add(pokemon) {
      if (typeof pokemon === "object") {
        pokemonRepository.push(pokemon);
      } else {
        return {
          message: "not an object"
        }
      }
    }

    function getAll() {
      return pokemonRepository;
    }

    return {
      add: add,
      getAll: getAll
    }
  })();

  pokemonRepository.getAll().forEach(function(pokemon) {
    let pokeName = pokemon.name;
    let pokeHeight = pokemon.height;
    document.write('<h1>Name: ' + pokeName + ' (height: ' + pokeHeight + ')</h1>');
    if (pokeHeight > 4) {
      document.write('<h3>Wow, that\'s big!</h3>');
    }
  })

})();
