import Styles from './AuthScreen.module.css';
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';

const AuthScreen = () => {
  const value = true;

  return (
    <div className={Styles.screen}>
      <div className={Styles.authContent}>
        <div>
          <h2 className={Styles.titleLogin}>{(value ? 'My Account'
                                                    : 'Create Account')}</h2>
          <div className={Styles.loginContent}>
            <Icon className={Styles.photo} path={mdiAccountCircle}/>
            {(value ? <AuthLogin/> : <AuthRegister/>)}
          </div>
        </div>
        <div className={Styles.image}>
          <h1>Image Here! Maybe</h1>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
