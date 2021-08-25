import React from 'react';
import axios from 'axios';

const FetchMewtwo = (props) => {
    let pokemon = {};
    const name = props.pokemonName;
    const moveOne = props.moveOne;
    const moveTwo = props.moveTwo;
    const moveThree = props.moveThree;
    const moveFour = props.moveFour;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(result => {
                
                let movesUrlList = [];
                movesUrlList[0] = result.data.moves[moveOne].move.url;
                movesUrlList[1] = result.data.moves[moveTwo].move.url;
                movesUrlList[2] = result.data.moves[moveThree].move.url;
                movesUrlList[3] = result.data.moves[moveFour].move.url;


                let pokemonObject = {
                    name: result.data.name,
                    lvl: 50,
                    imgSprite: result.data.sprites.front_default,
                    imgSpriteBack: result.data.sprites.back_default,
                    hpBS: result.data.stats[0].base_stat,
                    attBS: result.data.stats[1].base_stat,
                    defBS: result.data.stats[2].base_stat,
                    HP: 260,
                    currentHP: 260,
                    moves: [{ moveName: result.data.moves[moveOne].move.name, movePower: 50, moveDamage: 50 },
                    { moveName: result.data.moves[moveTwo].move.name, movePower: 150, moveDamage: 144 },
                    { moveName: result.data.moves[moveThree].move.name, movePower: 90, moveDamage: 87 },
                    { moveName: result.data.moves[moveFour].move.name, movePower: 120, moveDamage: 116 }]
                }

                movesUrlList.forEach((move, index) => {
                    axios.get(move)
                        .then(result => {
                            pokemonObject.moves[index].movePower = result.data.power;
                        });
                });

                if(name === 'mewtwo') {
                    pokemonObject.lvl = 70; 
                }

                pokemon = pokemonObject;

                localStorage.setItem('mewtwo', JSON.stringify(pokemon));
            })
    return(
        <div />
    )
}

export default FetchMewtwo;