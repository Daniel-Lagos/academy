import Styles from './AuthScreen.module.css';
import { useContext, useState } from 'react';
import { SessionContext } from '../../providers/sessionContext';
import fetch from 'isomorphic-fetch';

const AuthLogin = () => {
  const { session, setSession } = useContext(SessionContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('',{});
  };

  const handleInputEmail = () => {

  };

  return (
    <form className={Styles.inputLogin}>
      <input
        name={'email'}
        placeholder="Email"
        type="email"
      />
      <br/>
      <input
        name={'password'}
        placeholder="Password"
        type="password"
      />
      <p className={Styles.passwordText}><a href="www.google.com"
                                            style={{ color: 'black' }}> Forgot
        Password?</a></p>

      <button
        className={Styles.buttonLogin}
        type="onSubmit"
        onClick={handleSubmit}
      >
        <span>Log in</span>
      </button>
    </form>
  );
};

export default AuthLogin;
