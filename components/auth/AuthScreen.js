import Styles from './AuthScreen.module.css';
import Icon from "@mdi/react";
import {mdiAccountCircle} from '@mdi/js';

const AuthScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entro')
    }

    return (<div className={Styles.screen}>
        <div className={Styles.authContent}>
            <h2 className={Styles.titleLogin}>My account</h2>
            <div className={Styles.loginContent}>
                <Icon className={Styles.photo} path={mdiAccountCircle}/>
                <form>
                    <input
                        className={Styles.inputLogin}
                        placeholder="Login"
                        type="email"
                    />
                    <br/>
                    <input
                        className={Styles.inputLogin}
                        placeholder="Password"
                        type="password"
                    />
                    <p className={Styles.passwordText}><a href="www.google.com"
                                                          style={{color: "black"}}> Forgot
                        Password?</a></p>

                    <button
                        className={Styles.buttonLogin}
                        type="onSubmit"
                        onClick={handleSubmit}
                    >
                        <span>Sign In</span>
                    </button>
                </form>
            </div>
        </div>
    </div>);
}

export default AuthScreen;