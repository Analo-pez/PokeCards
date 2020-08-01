import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    const items = props.pokemons.map((pokemon, index) => {
        return (
            <li key={pokemon.id} className="App-card">
                <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} evolution={pokemon.evolution} />
            </li>);
    });


    return <ul className="App-List">{items}</ul>;
};



export default PokeList;
