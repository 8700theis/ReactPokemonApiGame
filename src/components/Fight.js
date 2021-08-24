import { useHistory } from 'react-router-dom';

const Fight = () => {
    const pokemonList = JSON.parse(localStorage.getItem('trainer-pokemon-list'));
    const history = useHistory();

    const handleHistory = () => {
        history.push('/');
    }

    const handleClick = () => {
        handleHistory();
    }

    return(
        <>
            <h1>Trainer name is: Fight component</h1>
            <button onClick={handleClick}>Restart</button>
        </>
    )
}

export default Fight;