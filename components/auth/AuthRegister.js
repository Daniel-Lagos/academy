import Styles from './AuthScreen.module.css';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {useForm} from '../../hooks/useForm';

const AuthRegister = () => {
    const {setSession} = useContext(SessionContext);

    const [formRegisterValues, handRegisterInputChangue] = useForm({
        name: '',
        surname: '',
        password: '',
        email: '',
        role: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        fetch('https://backend-academy.herokuapp.com/api/auth/new',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formRegisterValues.name,
                    surname: formRegisterValues.surname,
                    password: formRegisterValues.password,
                    email: formRegisterValues.email,
                    role: formRegisterValues.role
                })
            }).then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log('Registro exitoso')
                    setSession({
                        name: formRegisterValues.name,
                        surname: formRegisterValues.surname,
                        password: formRegisterValues.password,
                        email: formRegisterValues.email,
                        role: 'User_role'
                    });
                } else {
                    console.log(data.message);
                }
            })
    }
    return (
        <form className={Styles.inputLogin}>
            <input
                name={'name'}
                placeholder="Name"
                type="text"
                value={formRegisterValues.name}
                onChange={handRegisterInputChangue}
            />
            <br/>
            <input
                name={'surname'}
                placeholder="Surname"
                type="text"
                value={formRegisterValues.surname}
                onChange={handRegisterInputChangue}
            />
            <br/>
            <input
                name={'password'}
                placeholder="Password"
                type="password"
                value={formRegisterValues.password}
                onChange={handRegisterInputChangue}
            />
            <input
                name={'email'}
                placeholder="Email"
                type="email"
                value={formRegisterValues.email}
                onChange={handRegisterInputChangue}
            />
            <input
                name={'role'}
                placeholder="Role"
                type="text"
                value={formRegisterValues.role}
                onChange={handRegisterInputChangue}
            />
            <button
                className={Styles.buttonLogin}
                type="onSubmit"
                onClick={handleSubmit}
            >
                <span>Sign In</span>
            </button>
        </form>
    );
}

export default AuthRegister;