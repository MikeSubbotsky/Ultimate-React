import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormHandler({ setName }) {
    const [favoritePokemon, setFavoritePokemon] = useState("");
    const [trainer, setTrainer] = useState("");
    const [episode, setEpisode] = useState("");
    const [username, setUsername] = useState("");
    const [counter, setCounter] = useState(0);

    const notify = () => toast(`Name changed to ${username}`);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Pokemon: ${favoritePokemon}, Trainer: ${trainer}, Episode: ${episode}`);
        setUsername(username);
        setName(username);
        setCounter(counter+1);
        notify();

    };

    return (
        <>
        <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            
                <input className='form-control-lg m-2 col-md-6 mx-auto' placeholder='Favourite Poke' type="text" value={favoritePokemon} onChange={e => setFavoritePokemon(e.target.value)} />
            
            
                <input className='form-control-lg m-2 col-md-6 mx-auto' placeholder='Favourite Trainer' type="text" value={trainer} onChange={e => setTrainer(e.target.value)} />
            
            
                <input className='form-control-lg m-2 col-md-6 mx-auto' placeholder='Favourite Episode' type="text" value={episode} onChange={e => setEpisode(e.target.value)} />
            
            
                <input className='form-control-lg m-2' type="text" value={username} placeholder='Your name...' onChange={e => setUsername(e.target.value)} />
           
            <input type="submit" className='btn btn-primary m-2' value="Submit" />
            <div> Submitted {counter} times</div>
        </form>
        <ToastContainer />
        </>
    );
}

export default FormHandler;