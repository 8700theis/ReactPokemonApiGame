import { Link } from 'react-router-dom';

const Fight = () => {
    const pokemonList = JSON.parse(localStorage.getItem('trainer-pokemon-list'));
    return(
        <>
            <h1>Trainer name is: Fight component</h1>
            <Link to='/'>Go to Start</Link>
        </>
    )
}

export default Fight;