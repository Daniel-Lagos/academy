import Styles from './AuthScreen.module.css';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {useForm} from '../../hooks/useForm';
import Swal from 'sweetalert2'


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
        if (formRegisterValues.name === '' || formRegisterValues.surname === '' || formRegisterValues.password === '' ||
            formRegisterValues.email === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Faltan campos por rellenar',
            });
            console.log('Campos vacios')
        } else {
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
                        role: 'User_Role'
                    })
                }).then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log('Registro exitoso')
                        Swal.fire({
                           icon: 'success',
                           title: `El usuario ${data.name} ha sido registrado}`
                        });
                        setSession({
                            uid: data.uid,
                            name: data.name,
                            surname: data.surname,
                            email: data.email,
                            role: data.role
                        });
                    } else {
                        console.log(data.message);
                    }
                })
        }
    }
    return (
        <form className={Styles.inputLogin}>
            <input
                name={'name'}
                placeholder="Nombre"
                type="text"
                value={formRegisterValues.name}
                onChange={handRegisterInputChangue}
                autoComplete={'off'}
            />
            <br/>
            <input
                name={'surname'}
                placeholder="Apellido"
                type="text"
                value={formRegisterValues.surname}
                onChange={handRegisterInputChangue}
                autoComplete={'off'}
            />
            <br/>
            <input
                name={'password'}
                placeholder="Contraseña"
                type="password"
                value={formRegisterValues.password}
                onChange={handRegisterInputChangue}
                autoComplete={'off'}
            />
            <input
                name={'email'}
                placeholder="Correo"
                type="email"
                value={formRegisterValues.email}
                onChange={handRegisterInputChangue}
                autoComplete={'off'}
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
                <span>Registrarse</span>
            </button>
        </form>
    );
}
export default AuthRegister;