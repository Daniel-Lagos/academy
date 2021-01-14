import Styles from './AuthScreen.module.css';

const AuthScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entro')
    }

    return (<div className={Styles.screen}>
        <div className={Styles.authContent}>
            <h2 className={Styles.titleLogin}>My account</h2>
            <div className={Styles.loginContent}>
                <form>
                    <input className={Styles.inputLogin} placeholder="Login"/>
                    <br/>
                    <input className={Styles.inputLogin} placeholder="Password"/>
                    <p className={Styles.passwordText}> Forgot Password?</p>
                    <button
                        className={Styles.buttonLogin}
                        type="onSubmit"
                        onClick={handleSubmit}
                    >
                        <i className="fas fa-sign-out-alt"/>
                        <span>Sign In</span>
                    </button>
                </form>
            </div>
        </div>
    </div>);
}

export default AuthScreen;