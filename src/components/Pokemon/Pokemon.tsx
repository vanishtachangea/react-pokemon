import React from 'react';
import './Pokemon.css';
//import {PokemonDetails} from './PokemonDetails';

interface PokemonsProps {
    pokemons: Pokemons;
}
/* class Pokemon extends React.Component{
    render(){
        return <div>
            this.props.pokemons
            </div>
    }
}
export default Pokemon; */
export const Pokemon: React.FC<PokemonsProps> = (PokemonsProps) => {
    const handleSubmit = () => {
        //return <PokemonDetails/>
        console.log("handlesubmit");
        return <div>ddgd</div>

    }
    return (
        <div className="button-style" onClick={handleSubmit}>{PokemonsProps.pokemons.name}</div>)
}
