import { Link } from 'react-router-dom';
import { useState } from 'react';
import PokemonCard from './PokemonCard';
import './css/pick.css';

const Pick = () => {
    const [pokemonList, setPokemonList] = useState([]);
    return(
        <section className='content'>
            <article className="content-heading">
                <h1>Trainer {localStorage.getItem('trainerName')}, pick your Pokémons</h1>
            </article>
            <section className='pokemons'>
                <PokemonCard pokemonName='charizard' moveOne='17' moveTwo='37' moveThree='84' moveFour='24'/>
                <PokemonCard pokemonName='machamp' moveOne='32' moveTwo='48' moveThree='16' moveFour='73'/>
                <PokemonCard pokemonName='gengar' moveOne='28' moveTwo='36' moveThree='30' moveFour='21'/>
                <PokemonCard pokemonName='gyarados' moveOne='30' moveTwo='11' moveThree='41' moveFour='15'/>
                <PokemonCard pokemonName='raichu' moveOne='72' moveTwo='74' moveThree='18' moveFour='30'/>
                <PokemonCard pokemonName='hydreigon' moveOne='34' moveTwo='74' moveThree='10' moveFour='8'/>
                <PokemonCard pokemonName='suicune' moveOne='10' moveTwo='12' moveThree='14' moveFour='15'/>
                <PokemonCard pokemonName='kyurem' moveOne='27' moveTwo='3' moveThree='42' moveFour='19'/>
                <PokemonCard pokemonName='rayquaza' moveOne='87' moveTwo='32' moveThree='41' moveFour='89'/>
                <PokemonCard pokemonName='kyogre' moveOne='18' moveTwo='4' moveThree='12' moveFour='7'/>
                <PokemonCard pokemonName='lucario' moveOne='7' moveTwo='38' moveThree='84' moveFour='41'/>
                <PokemonCard pokemonName='tyranitar' moveOne='31' moveTwo='11' moveThree='33' moveFour='6'/>
            </section>
            <Link to='/fight'>Go to welcome</Link>
        </section>
    )
}

export default Pick;