/* Imports */
import { renderPokemon } from './render-utils.js';

/* Get DOM Elements */
const pokemonListEl = document.querySelector('.pokemons');
const formEl = document.querySelector('form');
const trainerHPEl = document.querySelector('#trainer-hp');
const leveledNumberEl = document.querySelector('#leveled-number');
const trainerImgEl = document.querySelector('#trainer-img');

/* State */
const pokemons = [
    { id: 1, name: 'Charmander', hp: 3 },
    { id: 2, name: 'Bulbasaur', hp: 3 },
    { id: 3, name: 'Squirtle', hp: 3 },
];
let currentId = 4;
let trainerHP = 3;
let leveledCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newPokemon = {
        id: currentId,
        name: data.get('pokemon-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    pokemons.push(newPokemon);

    displayPokemons();
});

function pokemonClickHandler(pokemon) {
    if (pokemon.hp <= 0) return;

    if (Math.random() < 0.33) {
        pokemon.hp--;
        alert('You leveled up ' + pokemon.name);
    } else {
        alert('You tried to level up ' + pokemon.name + ' but the pokemon disobeyed');
    }

    if (Math.random() < 0.5) {
        trainerHP--;
        alert(pokemon.name + ' attacked his trainer!');
    } else {
        //alert(pokemon.name + ' disobeyed and took a break');
    }

    if (pokemon.hp === 0) {
        leveledCount++;
    }

    if (trainerHP === 0) {
        trainerImgEl.classList.add('blacked-out');
        alert('You Have Blacked Out');
    }

    trainerHPEl.textContent = trainerHP;
    leveledNumberEl.textContent = leveledCount;

    const hpEl = document.getElementById(`pokemon-hp-${pokemon.id}`);

    hpEl.textContent = pokemon.hp < 0 ? 0 : pokemon.hp;

    // const babyEl = document.getElementById(`pokemon-${pokemon.id}`);

    //babyEl.textContent = pokemon.hp > 0 ?

    //const srEl = document.getElementById(`pokemon-sr-${pokemon.id}`);
    //srEl.textContent = pokemon.hp > 0 ?
}
/* Display Functions */
function displayPokemons() {
    pokemonListEl.textContent = '';

    for (let pokemon of pokemons) {
        const pokemonEl = renderPokemon(pokemon);
        pokemonEl.addEventListener('click', () => {
            pokemonClickHandler(pokemon);
        });
        pokemonListEl.append(pokemonEl);
    }
}

// //addTrainButton.addEventListener('click', () => {
//     //if (Math.random() > 0.5) {
//         alert('You won the battle and leveled up!');

//         Count++;
//         displayPokemons();
//     } else {
//         alert('You lost the battle!');
//     }
// });

displayPokemons();
