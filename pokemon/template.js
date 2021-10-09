var wrapp = $_('.js-wrapper');
var elTemplate = $_('#pokemon-card-template').content;

pokemons.forEach(function(pokemon){
    var newPokemon = elTemplate.cloneNode(true);

    newPokemon.querySelector(".pokemon__img").src = pokemon.img;
    newPokemon.querySelector(".pokemon__img").alt = pokemon.name;
    newPokemon.querySelector(".pokemon-name").textContent = pokemon.name;
    newPokemon.querySelector(".pokemon__type").textContent =
    pokemon.type.join(", ");
    wrapp.appendChild(newPokemon)
  return newPokemon;
})


