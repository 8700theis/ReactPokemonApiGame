import { useHistory } from 'react-router-dom';

const ResultPage = () => {
    const history = useHistory();

    const handleHistory = () => {
        history.push('/');
    }

    const handleClick = () => {
        handleHistory();
    }

    return(
        <div class="content-resultpage">
            <h1 class="content-resultpage-text">Congratz! You Have Defeated The Legendary Pokémon Mewtwo!</h1>
            <button class="content-resultpage-btn" onClick={handleClick}>Restart</button>
        </div>
    )
}

export default ResultPage;