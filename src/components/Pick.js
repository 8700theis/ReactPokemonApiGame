import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import FetchMewtwo from './FetchMewtwo';
import './css/pick.css';

const Pick = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [mewtwo, setMewtwo] = useState();
    const history = useHistory();

    const handleHistory = () => {
        history.push('/fight');
    }

    const calcHpAndAtt = () => {
        //Calculating HP and attack
        let pokemonlist = pokemonList;
        let hp = 0;
        pokemonlist.map(pokemon => {
            let bhs = pokemon.hpBS;
            let attBs = pokemon.attBS;
            let movePower = 0;
            let moveAttackValue = 0
            let lvl = pokemon.lvl;
            let mewtwoDefenceBS = mewtwo.defBS;
            hp = (((2 * bhs + 100) * lvl) / 100) + 41;
            pokemon.HP = Math.ceil(hp);
            pokemon.currentHP = Math.ceil(hp);
            pokemon.moves.map(move => {
                movePower = move.movePower;
                if (movePower === null) {
                    movePower = 0;
                    moveAttackValue = 0;
                } else {
                    moveAttackValue = Math.ceil(((((2 * lvl / 5 + 2) * attBs * movePower) / mewtwoDefenceBS) / 50) + 2);
                }
                move.moveDamage = moveAttackValue;
            });
        });
        setPokemonList(pokemonlist);
    }

    const handleClick = () => {
        if(pokemonList.length > 0) {
            calcHpAndAtt();
            localStorage.setItem('mewtwo', JSON.stringify(mewtwo));
            localStorage.setItem("trainer-pokemon-list", JSON.stringify(pokemonList));
            handleHistory();
        }
    }

    const onclickFunction = (value) => {
        setPokemonList([...pokemonList, value]);
    }

    const onRemoveFunction = (value) => {
        let tempPokemonList = [...pokemonList];
        tempPokemonList.splice(value, 1);
        setPokemonList(tempPokemonList);
    }

    useEffect(() => {
        if(pokemonList.length === 6) {
            const cards = document.querySelectorAll('.flip-card');
            cards.forEach(card => {
                card.classList.add('card-opacity');
            });
        }
    }, [pokemonList]);

    return(
        <section className='content'>
            <article className="content-heading">
                <h1>Trainer {localStorage.getItem('trainerName')}, pick up to six Pokémons</h1>
            </article>
            <section className='pokemons'>
                <FetchMewtwo pokemonName='mewtwo' moveOne='29' moveTwo='17' moveThree='30' moveFour='23' setmewtwo={value => setMewtwo(value)}/>
                <PokemonCard pokemonName='charizard' moveOne='17' moveTwo='37' moveThree='84' moveFour='24' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='machamp' moveOne='32' moveTwo='48' moveThree='16' moveFour='73' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='gengar' moveOne='28' moveTwo='36' moveThree='30' moveFour='21' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='gyarados' moveOne='30' moveTwo='11' moveThree='41' moveFour='15' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='raichu' moveOne='72' moveTwo='74' moveThree='18' moveFour='30' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='hydreigon' moveOne='34' moveTwo='74' moveThree='10' moveFour='8' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='suicune' moveOne='10' moveTwo='12' moveThree='14' moveFour='15' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='kyurem' moveOne='27' moveTwo='3' moveThree='42' moveFour='19' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='rayquaza' moveOne='87' moveTwo='32' moveThree='41' moveFour='89' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='kyogre' moveOne='18' moveTwo='4' moveThree='12' moveFour='7' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='lucario' moveOne='7' moveTwo='38' moveThree='84' moveFour='41' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
                <PokemonCard pokemonName='tyranitar' moveOne='31' moveTwo='11' moveThree='33' moveFour='6' onclick={value => onclickFunction(value)} onRemove={value => onRemoveFunction(value)}/>
            </section>
            <button className='pick-btn' onClick={handleClick}>Go to welcome</button>
        </section>
    )
}

export default Pick;