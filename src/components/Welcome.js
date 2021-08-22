import { useHistory } from 'react-router-dom';
import { useEffect, useState }  from 'react';
import './css/welcome.css';

const Welcome = () => {
    const [trainerName, setTrainerName] = useState('');
    const history = useHistory();

    const handleHistory = () => {
        history.push('/pick');
    }

    useEffect(() => {
        if(trainerName !== '') {
            localStorage.setItem('trainerName', trainerName);
            handleHistory();
        }
    }, [trainerName]);

    return(
        <section className='content'>
            <article className='content-heading'>
                <h1 className='heading'>Can You Beat The Legendary Pokémon?</h1>
            </article>
            <section>
                <h2 className='info-heading'>Enter your trainer name</h2>
                <article className='content-btn'>
                    <input className="content-btn-input" type="text" placeholder="Name ..." />
                    <button className='content-btn-submit' onClick={(e) => {
                        let inputField = document.querySelector('.content-btn-input');
                        if(inputField.value !== '') {
                            setTrainerName(inputField.value); 
                        } 
                    }}>Go to pick</button>
                </article>
            </section>
        </section>
    )
}

export default Welcome;