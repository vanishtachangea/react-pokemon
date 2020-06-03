import React, { Component } from 'react';
import { Pokemon } from './Pokemon/Pokemon';

interface PokemonsProps {
    pokemons: Pokemons;
}
class AllPokemon extends Component {
    constructor(props: PokemonsProps) {
        super(props);

    }
    state = {
        pokemons: {
            name: "",
            abilities: {},
            stats: {},
            moves: {}
        }

    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(json => this.setState({ pokemons: json }))
            .catch(error => alert(error.message));
    }
    render() {
        //const { name, abilities, stats, moves } = this.state.pokemons;
        const pokmons = this.state.pokemons;
        localStorage.setItem("pokemons", JSON.stringify(this.state.pokemons));
        console.log("dafdsf");
        console.log(pokmons.name);
        console.log(pokmons.abilities);
        console.log(pokmons.stats);
        console.log(pokmons.moves);
         return (
            <div>
                <h2>All Pokemons</h2>
                <Pokemon pokemons={pokmons} />

            </div>
        ); 


    }
}

export default AllPokemon;