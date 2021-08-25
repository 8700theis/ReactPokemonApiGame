import React, { useState, useEffect } from 'react';

//Components import
import Moves from './Moves';
import PokemonListFight from './PokemonListFight';
import ResultPage from './ResultPage';
import Mewtwo from './Mewtwo';

// Images import
import grassImage from '../images/grass.png';

// CSS import
import './css/fight.css';

class Fight extends React.Component {
    constructor() {
        super();
        this.state = {
            mewtwo: JSON.parse(localStorage.getItem('mewtwo')),
            pokemonList: JSON.parse(localStorage.getItem('trainer-pokemon-list')),
            currentPokemon: {}
        }
    }

    componentDidMount = () => {
        //Calculating HP and attack
        let pokemonlist = this.state.pokemonList;
        let hp = 0;
        pokemonlist.map(pokemon => {
            let bhs = pokemon.hpBS;
            let attBs = pokemon.attBS;
            let movePower = 0;
            let moveAttackValue = 0
            let lvl = pokemon.lvl;
            let mewtwoDefenceBS = this.state.mewtwo.defBS;
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
        this.setState({ pokemonList: pokemonlist });
        this.setState({ currentPokemon: this.state.pokemonList[0] });
        console.log(this.state.mewtwo);
    }

    render() {
        return(
            <section className='fightcontent'>
                
                <div className="content-fight">
                    <Mewtwo mewtwo={this.state.mewtwo} />
                    <div className="content-fight-bottom">
                        <img src={grassImage} alt="Grass image"/>
                        <div className="content-fight-bottom-pokemon">
                            <img src={this.state.currentPokemon.imgSpriteBack} alt="current pokemon"/>
                        </div>
    
                        <section>
                            <div className="content-fight-bottom-info">
                                <div className="content-fight-bottom-info-namelvl">
                                    <p className="pokemon-name">{this.state.currentPokemon.name}</p>
                                    <p className="pokemon-lvl">lvl. {this.state.currentPokemon.lvl}</p>
                                </div>
                                <div className="content-fight-bottom-info-hp">
                                    <p className="hp-text">HP</p>
                                    <div>
                                        <p className="hp-value">{this.state.currentPokemon.currentHP}</p>
                                        <p className="hp-value"> / </p>
                                        <p className="hp-value current-starting-hp">{this.state.currentPokemon.HP}</p>
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


}

export default Fight;