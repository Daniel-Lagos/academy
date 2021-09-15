import Styles from './AuthScreen.module.css';
import { useContext } from 'react';
import { SessionContext } from '../../providers/sessionContext';
import fetch from 'isomorphic-fetch';
import { useForm } from '../../hooks/useForm';

const AuthLogin = () => {
  const { session, setSession } = useContext(SessionContext);

  const [formLoginValues, handleLoginInputChange] = useForm({
    email: '',
    password: ''
  });

  console.log(formLoginValues.email);
  console.log(formLoginValues.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('', {});
  };

  return (
    <form className={Styles.inputLogin}>
      <input
        name={'email'}
        placeholder="Email"
        type="email"
        value={formLoginValues.email}
        onChange={handleLoginInputChange}
      />
      <br/>
      <input
        name={'password'}
        placeholder="Password"
        type="password"
        value={formLoginValues.password}
        onChange={handleLoginInputChange}
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
