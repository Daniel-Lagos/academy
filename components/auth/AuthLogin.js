import Styles from './AuthScreen.module.css';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {useForm} from '../../hooks/useForm';
import Swal from 'sweetalert2';

const AuthLogin = () => {
    const {session, setSession} = useContext(SessionContext);

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formLoginValues.email === '' || formLoginValues.password === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Faltan campos por rellenar',
            });
            console.log('Campos vacios')
        } else {
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
                        console.log(data)
                        setSession(
                            {
                                uid: data.uid,
                                name: data.name,
                                surname: data.surname,
                                email: data.email,
                                role: data.role
                            });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'La contraseña/email son incorrectos'
                        });
                        console.log(data)
                        console.log(data.message);
                    }
                });
        }
    };
    return (
        <form className={Styles.inputLogin}>
            <input
                name={'email'}
                placeholder="Correo"
                type="email"
                value={formLoginValues.email}
                onChange={handleLoginInputChange} required
                autoComplete={'off'}
            />
            <br/>
            <input
                name={'password'}
                placeholder="Contraseña"
                type="password"
                value={formLoginValues.password}
                onChange={handleLoginInputChange} required
                autoComplete={'off'}
            />
            <button
                className={Styles.buttonLogin}
                type="onSubmit"
                onClick={handleSubmit}>
                <span>Ingresar</span>
            </button>
        </form>
    );
};
export default AuthLogin;