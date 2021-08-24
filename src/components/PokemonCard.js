import React from 'react';
import axios from 'axios';

class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.pokemonName,
            moveOne: this.props.moveOne,
            moveTwo: this.props.moveTwo,
            moveThree: this.props.moveThree,
            moveFour: this.props.moveFour,
            pokemon: {},
            isActive: false,
            isClicked: false
        };
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });  
    };

    handleClick = () => {
        if(this.state.isClicked === false) {
            this.setState({ isClicked: true });
            this.props.onclick(this.state.pokemon);
        } else {
            this.setState({ isClicked: false });
            this.props.onRemove(this.state.pokemon);
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
            .then(result => {
                
                let movesUrlList = [];
                movesUrlList[0] = result.data.moves[this.state.moveOne].move.url;
                movesUrlList[1] = result.data.moves[this.state.moveTwo].move.url;
                movesUrlList[2] = result.data.moves[this.state.moveThree].move.url;
                movesUrlList[3] = result.data.moves[this.state.moveFour].move.url;


                let pokemonObject = {
                    name: result.data.name,
                    lvl: 50,
                    imgSprite: result.data.sprites.front_default,
                    imgSpriteBack: result.data.sprites.back_default,
                    hpBS: result.data.stats[0].base_stat,
                    attBS: result.data.stats[1].base_stat,
                    defBS: result.data.stats[2].base_stat,
                    HP: 0,
                    currentHP: 0,
                    moves: [{ moveName: result.data.moves[this.state.moveOne].move.name, movePower: 0, moveDamage: 0 },
                    { moveName: result.data.moves[this.state.moveTwo].move.name, movePower: 0, moveDamage: 0 },
                    { moveName: result.data.moves[this.state.moveThree].move.name, movePower: 0, moveDamage: 0 },
                    { moveName: result.data.moves[this.state.moveFour].move.name, movePower: 0, moveDamage: 0 }]
                }

                movesUrlList.forEach((move, index) => {
                    axios.get(move)
                        .then(result => {
                            pokemonObject.moves[index].movePower = result.data.power;
                        });
                });

                if(this.state.name === 'mewtwo') {
                    pokemonObject.lvl = 70; 
                }

                this.setState({pokemon: pokemonObject});
            })
    }

    render() {
        return(
            <section className={`flip-card ${this.state.isClicked ? "card-opacity" : ""}`} onMouseEnter={this.handleToggle} onMouseLeave={this.handleToggle}>
                <section className={`flip-card-inner ${this.state.isActive ? "flip" : ""}`}>
                    <section className='flip-card-front'>
                        <img src={this.state.pokemon.imgSprite} />
                        <h2>{this.state.name}</h2>
                    </section>
                    <section className='flip-card-back'>
                        <img src={this.state.pokemon.imgSpriteBack} />
                        <button className='flip-card-button' onClick={this.handleClick}>{this.state.isClicked ? "Remove" : "Add to team"}</button>
                    </section>
                </section>                
            </section>
        )
    }
}

export default PokemonCard;