import { useState, useEffect } from 'react';
import Moves from './Moves';
import PokemonListFight from './PokemonListFight';
import ResultPage from './ResultPage';
import Mewtwo from './Mewtwo';
import grassImage from '../images/grass.png';
import './css/fight.css';

const Fight = () => {
    const pokemonList = JSON.parse(localStorage.getItem('trainer-pokemon-list'));
    const [currentPokemon, setCurrentPokemon] = useState(pokemonList[0]);

    return(
        <section className='fightcontent'>
            <div class="content-fight">
                <Mewtwo />
                <div class="content-fight-bottom">
                    <img src={grassImage} alt="Grass image"/>
                    <div class="content-fight-bottom-pokemon">
                        <img src={currentPokemon.imgSpriteBack} alt="current pokemon"/>
                    </div>

                    <section>
                        <div class="content-fight-bottom-info">
                            <div class="content-fight-bottom-info-namelvl">
                                <p class="pokemon-name">{currentPokemon.name}</p>
                                <p class="pokemon-lvl">lvl. {currentPokemon.lvl}</p>
                            </div>
                            <div class="content-fight-bottom-info-hp">
                                <p class="hp-text">HP</p>
                                <div>
                                    <p class="hp-value">{currentPokemon.currentHP}</p>
                                    <p class="hp-value"> / </p>
                                    <p class="hp-value current-starting-hp">{currentPokemon.HP}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Moves />
            <PokemonListFight />
            <ResultPage />
        </section>

    )
}

export default Fight;