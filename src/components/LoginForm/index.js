import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObj = {
            'Project-ID': 'c32567b4-a17c-4a24-bd16-03ca12eec4cf',
            'User-Name': username,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObj })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload();
        } catch (error) {
            setError('Oops, incorrect credentials')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} className="input" placeholder="Username" required></input>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} className="input" placeholder="Password" required></input>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm