import grassImage from '../images/grass.png';

const Mewtwo = () => {
    return (
        <div class="content-fight-top">
            <img src={grassImage} alt="Grass"/>
             <section>
                <div class="content-fight-top-info">
                    <div class="content-fight-top-info-namelvl">
                        <p class="pokemon-name" id="boss-name"></p>
                        <p class="pokemon-lvl" id="boss-lvl"></p>
                    </div>
                    <div class="content-fight-top-info-hp">
                        <p class="hp-text">HP:</p>
                        <p class="hp-value" id="boss-hp"></p>
                    </div>
                </div>
            </section>

            <div class="content-fight-top-pokemon">
                <img src="" alt=""/>
            </div>
        </div>
    )
}

export default Mewtwo;