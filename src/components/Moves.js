import React from "react";

class Moves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemonName: this.props.currentpokemon.name,
            currentPokemonMoveOne: {
                moveName: this.props.currentpokemon.moves[0].moveName,
                moveDamage: this.props.currentpokemon.moves[0].moveDamage
            },
            currentPokemonMoveTwo: {
                moveName: this.props.currentpokemon.moves[1].moveName,
                moveDamage: this.props.currentpokemon.moves[1].moveDamage
            },
            currentPokemonMoveThree: {
                moveName: this.props.currentpokemon.moves[2].moveName,
                moveDamage: this.props.currentpokemon.moves[2].moveDamage
            },
            currentPokemonMoveFour: {
                moveName: this.props.currentpokemon.moves[3].moveName,
                moveDamage: this.props.currentpokemon.moves[3].moveDamage
            },
            fightIsClicked: false,
            pokemonlistIsClicked: false,
            myTurn: true,
            isCurrentPokemonDead: false,
            pokemonList: this.props.pokemonlist,
            currentPokemon: this.props.currentpokemon,
            mewtwo: this.props.mewtwo
        }
    }

    onFightClick = () => {
        if(this.state.isCurrentPokemonDead === false) {
            if(this.state.fightIsClicked) {
                this.setState({ fightIsClicked: false });
            } else {
                this.setState({ fightIsClicked: true });
            }
        }
    }

    onPokeBagClick = () => {
        if(this.state.pokemonlistIsClicked) {
            this.setState({ pokemonlistIsClicked: false });
        } else {
            this.setState({ pokemonlistIsClicked: true });
        }
    }

    onPokemonInBagClick = () => {
        this.setState({isCurrentPokemonDead: false});
    }

    mewtwoMakesMove = () => {
        if(this.state.myTurn === false) {
            let mewtwoImg = document.querySelector('#mewtwoImg');
            let currentPokeImg = document.querySelector('#currentPokemonImg');
            let currentPokemonCopy = this.state.currentPokemon;
            let pokemonListCopy = [...this.state.pokemonList];
            let randomNumberGen = Math.floor(Math.random() * 4);
            currentPokemonCopy.currentHP = currentPokemonCopy.currentHP - this.state.mewtwo.moves[randomNumberGen].moveDamage;
            if(currentPokemonCopy.currentHP <= 0) {
                currentPokemonCopy.currentHP = 0;
                currentPokeImg.classList.add('pokemon-dead');
                this.setState({isCurrentPokemonDead: true});
            }

            mewtwoImg.className = 'mewtwoAttack';
            setTimeout(() => {
                mewtwoImg.className = '';
            }, 500);
            this.setState({currentPokemon: currentPokemonCopy}, () => this.props.setCurrentpokemon(this.state.currentPokemon));
            this.setState({myTurn: true});
        }
    }

    makeMove = (damage) => {
        if(this.state.myTurn) {
            let currentPokeImg = document.querySelector('#currentPokemonImg');
            let mewtwoCopy = this.state.mewtwo;
            mewtwoCopy.HP = mewtwoCopy.HP - damage;
            currentPokeImg.className = 'currentAttack';
            setTimeout(() => {
                currentPokeImg.className = '';
            }, 500);
            this.setState({fightIsClicked: false});
            this.setState({mewtwo: mewtwoCopy}, () => this.props.setMewtwo(this.state.mewtwo));
            this.setState({myTurn : false}, () => setTimeout(() => {this.mewtwoMakesMove()}, 1000));
        }
    }

    render() {
        return(
            <>
            <div className="content-bottom">
                <div className="content-bottom-left">
                    <div className={`content-bottom-left-overlay ${this.state.fightIsClicked ? 'hide-overlay' : 'show-overlay'}`}>
                        <h1 className="content-bottom-left-overlay-heading">What will {this.state.currentPokemonName} do?</h1>
                    </div>
                    <div className="content-bottom-left-moves">
                        <section className="moves-move-wrapper" onClick={() => this.makeMove(this.state.currentPokemonMoveOne.moveDamage)}>
                            <div>
                                <p className="move">{this.state.currentPokemonMoveOne.moveName}</p>
                            </div>
                        </section>
                        <section className="moves-move-wrapper" onClick={() => this.makeMove(this.state.currentPokemonMoveTwo.moveDamage)}>
                            <div>
                                <p className="move">{this.state.currentPokemonMoveTwo.moveName}</p>
                            </div>
                        </section>
                        <section className="moves-move-wrapper" i onClick={() => this.makeMove(this.state.currentPokemonMoveThree.moveDamage)}>
                            <div>
                                <p className="move">{this.state.currentPokemonMoveThree.moveName}</p>
                            </div>
                        </section>
                        <section className="moves-move-wrapper"  onClick={() => this.makeMove(this.state.currentPokemonMoveFour.moveDamage)}>
                            <div>
                                <p className="move">{this.state.currentPokemonMoveFour.moveName}</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="content-bottom-right">
                    <div onClick={this.onFightClick}>
                        <p className="content-bottom-right-fight" >Fight</p>
                    </div>
                    <div onClick={this.onPokeBagClick}>
                        <p className="content-bottom-right-pokemon">Pokémon</p>
                    </div>
                </div>
            </div>

            <div className={`content-pokemon-list ${this.state.pokemonlistIsClicked ? 'show-poke-list' : 'hide-poke-list'}`}>
                <p className="content-pokemon-list-back-btn" onClick={this.onPokeBagClick}>Back</p>

                {this.state.pokemonList.map((pokemon) =>  
                    <div className="content-pokemon-list-item" onClick={this.onPokemonInBagClick}>
                        <img src={pokemon.imgSprite} alt="pokemon"/>
                        <div className="content-pokemon-list-item-info">
                            <div className="content-pokemon-list-item-info-namelvl">
                                <p className="pokemon-name">{pokemon.name}</p>
                                <p className="pokemon-lvl">lvl. {pokemon.lvl}</p>
                            </div>
                            <div className="content-pokemon-list-item-info-hp">
                                <p className="hp-text">HP:</p>
                                <div>
                                    <p className="hp-value">{pokemon.currentHP}</p
                                    ><p className="hp-value"> / </p>
                                    <p className="hp-value starting-hp">{pokemon.HP}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            </>
        )
    }
}

export default Moves;