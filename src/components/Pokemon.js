import React from 'react';

const Pokemon = props => {
    return <article class="App-container">
        <h1>{props.name}</h1>
        <p>{props.types}</p>
        <span>{props.evolution}</span>



    </article>;
};

export default Pokemon;
