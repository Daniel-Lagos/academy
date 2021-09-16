import Styles from './AuthScreen.module.css';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {useForm} from '../../hooks/useForm';

const AuthLogin = () => {
    const {setSession} = useContext(SessionContext);

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('https://backend-academy.herokuapp.com/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: formLoginValues.password,
                email: formLoginValues.email
            })
        }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Ingreso exitoso');
                    setSession(
                        {
                            email: formLoginValues.email,
                            password: formLoginValues.password
                        });
                } else {
                    console.log(data.message);
                }
            })


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
                                                  style={{color: 'black'}}> Forgot
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
