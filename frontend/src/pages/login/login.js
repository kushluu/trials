import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import axios from '../../axios-config';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin =  async () => {
        console.log('Username:', username);
        console.log('Password:', password);
        try {
            const response = await axios.post('http://127.0.0.1:8080/api/login', {
                email_id: username,
                password : password,
              });
      
            if (response.status === 200) {
                navigate('/dashboard');
            } else {
              console.error('Login failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
      };

    return (
        <div className="login-container">
          <h2>Login Page</h2>
          <form className="login-form">
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleLogin}>Login</button>
          </form>
        </div>
      );
      
}
export default Login;