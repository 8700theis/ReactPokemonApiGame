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
        <div className="content-resultpage">
            <h1 className="content-resultpage-text">Congratz! You Have Defeated The Legendary Pokémon Mewtwo!</h1>
            <button className="content-resultpage-btn" onClick={handleClick}>Restart</button>
        </div>
    )
}

export default ResultPage;