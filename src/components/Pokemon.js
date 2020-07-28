import React from 'react';

const Pokemon = props => {
    return <article className="App-container">
        <img src={props.url} className="App-img" alt="imagen pokemon" />
        <h1>{props.name}</h1>
        <p>{props.types}</p>
        <span>{props.evolution}</span>
    </article>;
};


export default Pokemon;
