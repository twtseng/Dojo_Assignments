var pokemonData = [];

function setCardClickHandler() {
   // $('.card').click();
   $('.card').hover(
       function(){
           $(this).css('color','purple');
           var pokemonIndex = $(this).attr('pokemonIndex');
           var pokemon = pokemonData[pokemonIndex];
           var pokemonDescription = `
           <h1>${pokemon.name}</h1>
           <img src="${pokemon.sprites["front_default"]}">
           <h2>Height: ${pokemon.height}</h2>
           <h2>Weight: ${pokemon.weight}</h2>
           <h2>Types</h2>
           <ul>
           `;
           pokemon.types.forEach(x => {
                pokemonDescription += `<li>${x.type.name}</li>`
           });
           pokemonDescription += '</ul>'

           $('#pokemonDescription').html(pokemonDescription);
       }
       , function() {
           $(this).css('color','black');
    });
}
function addPokemon(pokemon) {
    
    var newPokemonHtml=`<div class="card" style="width: 10rem;" pokemonIndex="${pokemonData.length}">
    <img class="card-img-top"
        src="${pokemon.sprites["front_default"]}"
        alt="">
    <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
    </div>
</div>`
    $('#pokemonList').append(newPokemonHtml);
    pokemonData.push(pokemon);
    setCardClickHandler();
}
function processPokemons(response) {
    pokemonData = [];
    response.results.forEach(x => {
        $.get(x.url, addPokemon);
    })
}
$(document).ready(function() {
    $.get("https://pokeapi.co/api/v2/pokemon?limit=10", processPokemons)
});