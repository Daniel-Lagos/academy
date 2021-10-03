import Styles from './AuthScreen.module.css';
import Icon from '@mdi/react';
import {mdiAccountCircle} from '@mdi/js';
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';
import {Button} from "react-bootstrap";
import {useState} from "react";

const AuthScreen = () => {
    const [value, setValue] = useState(true);

    return (
        <div className={Styles.screen}>
            <div className={Styles.authContent}>
                <div>
                    <h2 className={Styles.titleLogin}>{(value ? 'Account' : 'Create Account')}</h2>
                    <div className={Styles.loginContent}>
                        <Icon className={Styles.photo} path={mdiAccountCircle}/>
                        {(value ? <AuthLogin/> : <AuthRegister/>)}
                    </div>
                    {value ?
                        <>
                            <hr/>
                            <button className={Styles.buttonLogin} onClick={() => {
                                setValue(false)
                            }}>
                                Registrarse
                                {console.log(value)}
                            </button>
                        </>

                        : <span>{}</span>}
                </div>
            </div>
        </div>
    );
};

export default AuthScreen;
