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

  function addListItem(pokemon) {
    // create elements:
    var pokeLi = document.createElement('li');
    var pokeName = document.createElement('p');
    var pokeHeight = document.createElement('p');
    var pokeInfoButton = document.createElement('button');

    // assign values:
    pokeName.innerHTML = pokemon.name;
    pokeHeight.innerHTML = 'Height: ' + pokemon.height;
    pokeInfoButton.innerHTML = pokemon.name;

    // assign attributes:
    pokeLi.classList.add('pokeListItem');

    // append elements to main li:
    pokeLi.appendChild(pokeName);
    pokeLi.appendChild(pokeHeight);
    pokeLi.appendChild(pokeInfoButton);

    // append li to DOM ul:
    document.querySelector('#pokemonList').append(pokeLi);

    // add event listener:
    pokeLi.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  // get all pokemon objects from repository and add them to the DOM
  pokemonRepository.getAll().forEach(function(pokemon) {
    addListItem(pokemon);
  });

  // the function run upon clicking a pokemon li
  function showDetails(pokemon) {
    console.log(pokemon);
  }

})();
