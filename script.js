// Declare variables
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const pokemonId = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const spriteCtn = document.getElementById("sprite-container");
const types = document.getElementById("types");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");


const searchBtn = document.getElementById("search-button");

// Add addEventListener on searchBtn
searchBtn.addEventListener("click", (e) => {
    // Prevent form submission
    e.preventDefault();

    // Check if the input is "Red"
    if (searchInput.value.toLowerCase() === "red") {
        alert("Pokémon not found");
    } else {
        // Proceed with searching the Pokémon (you can add your fetch code here)
        fetchPokemonData(searchInput.value);        
    }
});

// Function to fetch Pokémon data
async function fetchPokemonData(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        displayPokemonData(data);
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }    
}

// Function to display Pokémon data
function displayPokemonData(data) {
    pokemonId.textContent = `#${data.id}`;
    pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    spriteCtn.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
    types.textContent = data.types.map(typeInfo => typeInfo.type.name).join(", ");
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    hp.textContent = `${data.stats[0].base_stat}`;
    attack.textContent = `${data.stats[1].base_stat}`;
    defense.textContent = `${data.stats[2].base_stat}`;
    spAttack.textContent = `${data.stats[3].base_stat}`;
    spDefense.textContent = `${data.stats[4].base_stat}`;
    speed.textContent = `${data.stats[5].base_stat}`;
}
// Initial fetch for a default Pokémon (e.g., Pikachu)
fetchPokemonData("pikachu");

// add colors based on type
const typeColors = {
   normal: '#A8A77A',
   fire: '#FBA54C',
   water: '#A4C8E1',
   electric: '#F2D94F',
   grass: '#A7C74C',
   ice: '#A0D8E1',
   fighting: '#C22E28',
   poison: '#A33EA1',
   ground: '#E2BF65',
   flying: '#A98FF3',
   psychic: '#F95587',
   bug: '#A6B91A',
   rock: '#B6A136',
   ghost: '#735797',
   dragon: '#6F35FC',
   dark: '#705746',
   steel: '#B7B7CE',
   fairy: '#D685AD',
};
