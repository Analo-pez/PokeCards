import React from 'react';
import PropTypes from 'prop-types';
// import FavPokemon from './Events'
// import PokeList from './PokeList';

const Pokemon = props => {
    const typesLi = props.types.map((type, index) => {
        return <li key={index}>{type}</li>;
    });
    return <article>
        <img src={props.url} className="App-img" alt="imagen pokemon" />
        <h1>{props.name}</h1>
        <p>types:<span className="App-box">{typesLi}</span></p>
        <span>{props.evolution === null ? 'No evoluciona' : props.evolution}</span>
    </article >;
};

Pokemon.defaultProps = {
    evolution: ''
};

Pokemon.propTypes = {
    name: PropTypes.string,
    types: PropTypes.array,
    evolution: PropTypes.string,
};

export default Pokemon;
