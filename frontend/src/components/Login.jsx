import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

function Login() {
  const [credentials, setCredentials] = useState({ userName: '', passWord: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      navigate('/products');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <input
        className={styles.input}
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, userName: e.target.value })
        }
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, passWord: e.target.value })
        }
      />
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
