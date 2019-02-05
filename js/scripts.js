(function() {

  var pokemonRepository = (function() {

    var pokemonRepository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function loadList() {
      showLoadingMessage();
      return fetch(apiUrl).then( (response) => {
        return response.json();
      }).then(function (json) {
        json.results.forEach( (item) => {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
        hideLoadingMessage();
      }).catch( (e) => {
        console.error(e);
      });
    }

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

    function loadDetails(item) {
      showLoadingMessage();
      var url = item.detailsUrl;
      return fetch(url).then( (response) => {
        return response.json();
      }).then( (details) => {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = Object.keys(details.types);
        hideLoadingMessage();
      }).catch( (e) => {
        console.error(e);
      });
    }

    function showLoadingMessage() {
      var loadingIcon = document.createElement('div');
      loadingIcon.innerHTML = 'Now loading!';
      loadingIcon.classList.add('loading-icon');
      document.querySelector('body').append(loadingIcon);
    }

    function hideLoadingMessage() {
      var el = document.querySelector('.loading-icon');
      setTimeout( () => {
        el.remove();
      }, 1000);
    }

    return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails
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
    pokeLi.addEventListener('click', (event) => {
      showDetails(pokemon);
    });
  }

  pokemonRepository.loadList().then( () => {
    // get all pokemon objects from repository and add them to the DOM
    pokemonRepository.getAll().forEach( (pokemon) => {
      addListItem(pokemon);
    });
  });


  // the function run upon clicking a pokemon li
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then( () => {
      console.log(pokemon);
    });
  }

})();
