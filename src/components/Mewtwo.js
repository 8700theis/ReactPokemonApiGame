import grassImage from '../images/grass.png';

const Mewtwo = (props) => {
    return (
        <div className="content-fight-top">
            <img src={grassImage} alt="Grass"/>
             <section>
                <div className="content-fight-top-info">
                    <div className="content-fight-top-info-namelvl">
                        <p className="pokemon-name">{props.mewtwo.name}</p>
                        <p className="pokemon-lvl">lvl. {props.mewtwo.lvl}</p>
                    </div>
                    <div className="content-fight-top-info-hp">
                        <p className="hp-text">HP:</p>
                        <p className="hp-value">{props.mewtwo.HP}</p>
                    </div>
                </div>
            </section>

            <div className="content-fight-top-pokemon">
                <img id='mewtwoImg' src={props.mewtwo.imgSprite} alt="Mewtwo"/>
            </div>
        </div>
    )
}

export default Mewtwo;