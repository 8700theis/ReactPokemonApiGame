const Moves = () => {
    return(
        <div className="content-bottom">
            <div className="content-bottom-left">
                <div className="content-bottom-left-overlay">
                    <h1 className="content-bottom-left-overlay-heading">What will</h1>
                </div>
                <div className="content-bottom-left-moves">
                    <section className="moves-move-wrapper">
                        <div>
                            <p className="move"></p>
                        </div>
                    </section>
                    <section className="moves-move-wrapper">
                        <div>
                            <p className="move"></p>
                        </div>
                    </section>
                    <section className="moves-move-wrapper">
                        <div>
                            <p className="move"></p>
                        </div>
                    </section>
                    <section className="moves-move-wrapper">
                        <div>
                            <p className="move"></p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="content-bottom-right">
                <div>
                    <p className="content-bottom-right-fight">Fight</p>
                </div>
                <div>
                    <p className="content-bottom-right-pokemon">Pokémon</p>
                </div>
            </div>
        </div>
    )
}

export default Moves;