import React from 'react';

//Components import
import Moves from './Moves';
import ResultPage from './ResultPage';
import Mewtwo from './Mewtwo';

// Images import
import grassImage from '../images/grass.png';

// CSS import
import './css/fight.css';

class Fight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mewtwo: JSON.parse(localStorage.getItem('mewtwo')),
            pokemonList: JSON.parse(localStorage.getItem('trainer-pokemon-list')),
            currentPokemon: JSON.parse(localStorage.getItem('trainer-pokemon-list'))[0]
        }
    }

    render() {
        return(
            <section className='fightcontent'>
                
                <div className="content-fight">
                    <Mewtwo mewtwo={this.state.mewtwo}  />
                    <div className="content-fight-bottom">
                        <img src={grassImage} alt="Grass image"/>
                        <div className="content-fight-bottom-pokemon">
                            <img id='currentPokemonImg' src={this.state.currentPokemon.imgSpriteBack} alt="current pokemon"/>
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
                
                <Moves currentpokemon={this.state.currentPokemon} setCurrentpokemon={value => this.setState({currentPokemon: value})} pokemonlist={this.state.pokemonList} setPokemonlist={value => this.setState({pokemonList: value})} mewtwo={this.state.mewtwo} setMewtwo={value => this.setState({mewtwo: value})} />
                <ResultPage />
            </section>
        )
    }
}

export default Fight;