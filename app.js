async function pokemon(){

    event.preventDefault()



    let pokemon = document.getElementById("pokemon").value;
    let baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    

    let response = await fetch(baseUrl);
    let data = await response.json();

    let pokemonName = document.getElementById("pokemon_name");
    console.log(`Pokemon Name Is:${data.name}, Weight: ${data.weight}, Height: ${data.height}`);

    
}