import Styles from './AuthScreen.module.css';
import Icon from "@mdi/react";
import {mdiAccountCircle} from '@mdi/js';
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";

const AuthScreen = () => {

    const value = false;

    return (
        <div className={Styles.screen}>
            <div className={Styles.authContent}>
                <div>
                    <h2 className={Styles.titleLogin}>{(value ? 'My Account' : 'Create Account')}</h2>
                    <div className={Styles.loginContent}>
                        <Icon className={Styles.photo} path={mdiAccountCircle}/>
                        {(value ? <AuthLogin/> : <AuthRegister/>)}
                    </div>
                </div>
                <div className={Styles.image}>
                    <img src="https://i2.wp.com/imagenesparapeques.com/wp-content/uploads/2021/01/Among-Us-imagenes-en-png.png?fit=1288%2C1666&ssl=1" alt={'LOL'} width={'490px'} height={'580px'}/>
                </div>
            </div>
        </div>
    );
}

export default AuthScreen;