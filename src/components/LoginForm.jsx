import { useState } from 'react';
import axios from 'axios';

let LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = { 'Project-ID' : '79a677c8-6a21-4c43-a9bc-2f2aadf2ce02', 'User-Name' : `${username}` , 'User-Secret' : `${password}` }

        try{
            await axios.get('https://api.chatengine.io/chats', { headers : authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }catch(error){
            setError('Oops! Incorrect credentials...')
        }

    }


    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chatika App</h1>
                <form onSubmit={ handleSubmit }>
                    <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required /> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required /> 

                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <div className="error">{ error }</div>
                </form>
            </div>
        </div>    
    )
}

export default LoginForm;