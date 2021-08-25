const PokemonListFight = () => {
    return(
        <div className="content-pokemon-list hide-poke-list">
            <p className="content-pokemon-list-back-btn">Back</p>
            <div className="content-pokemon-list-item">
                <img src="" alt=""/>
                <div className="content-pokemon-list-item-info">
                    <div className="content-pokemon-list-item-info-namelvl">
                        <p className="pokemon-name">Charizard</p>
                        <p className="pokemon-lvl">lvl. 50</p>
                    </div>
                    <div className="content-pokemon-list-item-info-hp">
                        <p className="hp-text">HP:</p>
                        <div>
                            <p className="hp-value">300</p>
                            <p className="hp-value"> / </p>
                            <p className="hp-value starting-hp">300</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )   
}

export default PokemonListFight;