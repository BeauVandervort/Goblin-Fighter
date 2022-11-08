export function renderPokemon(pokemon) {
    const pokemonEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const babyEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const srEl = document.createElement('span');

    pokemonEl.classList.add('pokemon');

    nameEl.textContent = pokemon.name;
    hpEl.textContent = pokemon.hp < 0 ? 0 : pokemon.hp;
    hpEl.id = `pokemon-hp-${pokemon.id}`;

    srEl.classList.add('screen-reader-only');
    srEl.id = `pokemon-sr-${pokemon.id}`;
    srEl.textContent = pokemon.hp > 0 ? 'baby pokemon' : 'evolved pokemon';

    babyEl.id = `pokemon-${pokemon.id}`;
    babyEl.textContent = pokemon.hp > 0 ? '🥚' : '🐣';

    if (pokemon.hp < 0) {
        pokemonEl.classList.add('hatched');
    }
    pokemonEl.append(nameEl, babyEl, hpEl, srEl);

    return pokemonEl;
}
