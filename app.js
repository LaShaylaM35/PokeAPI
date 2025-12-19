async function getpokemon(){

    event.preventDefault()



    let pokemon = document.getElementById("pokemon").value;
    let baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    

    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);

    let pokemonName = document.getElementById("pokemon_name");
    pokemonName.innerHTML = `Pokemon Name Is: ${data.name}, Weight: ${data.weight}, Height: ${data.height}`;
     
    pokemonName.innerHTML += `<img src="${data.sprites.front_default}">`
    
}