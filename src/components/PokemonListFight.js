const PokemonListFight = () => {
    return(
        <div class="content-pokemon-list hide-poke-list">
            <p class="content-pokemon-list-back-btn">Back</p>
            <div class="content-pokemon-list-item">
                <img src="" alt=""/>
                <div class="content-pokemon-list-item-info">
                    <div class="content-pokemon-list-item-info-namelvl">
                        <p class="pokemon-name">Charizard</p>
                        <p class="pokemon-lvl">lvl. 50</p>
                    </div>
                    <div class="content-pokemon-list-item-info-hp">
                        <p class="hp-text">HP:</p>
                        <div>
                            <p class="hp-value">300</p>
                            <p class="hp-value"> / </p>
                            <p class="hp-value starting-hp">300</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )   
}

export default PokemonListFight;