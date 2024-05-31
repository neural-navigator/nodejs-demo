const yargs = require("yargs");

// Parsing command line arguments
const argv = yargs.argv;

const printFiveMoves = async (pokemonName) => {

    console.log(pokemonName);
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    // const pokemon = await response.json();
    // const moves = pokemon.moves.map(({ move }) => move.name);
    // console.log(moves.slice(0, 5));
};

// Accessing the pokemon argument correctly
printFiveMoves(argv.pokemon);
