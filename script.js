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
    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defense.textContent = `Defense: ${data.stats[2].base_stat}`;
    spAttack.textContent = `Special Attack: ${data.stats[3].base_stat}`;
    spDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;
}

