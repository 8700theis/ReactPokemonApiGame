import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import './css/pick.css';

const Pick = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const history = useHistory();

    const handleHistory = () => {
        history.push('/fight');
    }

    /* useEffect(() => {
        if(pokemonList.length > 0) {
            console.log(pokemonList);
        }
    }, [pokemonList]); */

    return(
        <section className='content'>
            <article className="content-heading">
                <h1>Trainer {localStorage.getItem('trainerName')}, pick up to six Pokémons</h1>
            </article>
            <section className='pokemons'>
                <PokemonCard pokemonName='charizard' moveOne='17' moveTwo='37' moveThree='84' moveFour='24' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='machamp' moveOne='32' moveTwo='48' moveThree='16' moveFour='73' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='gengar' moveOne='28' moveTwo='36' moveThree='30' moveFour='21' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='gyarados' moveOne='30' moveTwo='11' moveThree='41' moveFour='15' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='raichu' moveOne='72' moveTwo='74' moveThree='18' moveFour='30' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='hydreigon' moveOne='34' moveTwo='74' moveThree='10' moveFour='8' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='suicune' moveOne='10' moveTwo='12' moveThree='14' moveFour='15' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='kyurem' moveOne='27' moveTwo='3' moveThree='42' moveFour='19' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='rayquaza' moveOne='87' moveTwo='32' moveThree='41' moveFour='89' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='kyogre' moveOne='18' moveTwo='4' moveThree='12' moveFour='7' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='lucario' moveOne='7' moveTwo='38' moveThree='84' moveFour='41' onclick={value => setPokemonList([...pokemonList, value])}/>
                <PokemonCard pokemonName='tyranitar' moveOne='31' moveTwo='11' moveThree='33' moveFour='6' onclick={value => setPokemonList([...pokemonList, value])}/>
            </section>
            <button onClick= {() => {
                /* if(pokemonList.length > 0) {
                    handleHistory();
                } */
                console.log(pokemonList);
            }}>Go to welcome</button>
        </section>
    )
}

export default Pick;