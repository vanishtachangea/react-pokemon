import React, { Component } from 'react';

/* class PokemonDetails extends React.Component {
    render(){
        return <div>test</div>
    }
}
export default PokemonDetails; */
interface PokemonsProps {
    pokemons: Pokemons;
}
export const PokemonDetails: React.FC<PokemonsProps> = (PokemonsProps) => {
    return (<div></div>)
}