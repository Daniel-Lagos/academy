import Styles from './AuthScreen.module.css';
import Icon from "@mdi/react";
import {mdiAccountCircle} from '@mdi/js';
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const AuthScreen = () => {

    const value = false;

    return (<div className={Styles.screen}>
        <div className={Styles.authContent}>
            <h2 className={Styles.titleLogin}>My account</h2>
            <div className={Styles.loginContent}>
                <Icon className={Styles.photo} path={mdiAccountCircle}/>
                {
                    (value ? <AuthLogin/> : <AuthRegister/>)
                }
            </div>
        </div>
    </div>);
}

export default AuthScreen;