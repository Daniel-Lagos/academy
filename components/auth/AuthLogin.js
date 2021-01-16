import Styles from "./AuthScreen.module.css";

const AuthLogin = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entro')
    }
    return (<form>
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
    </form>);
}

export default AuthLogin;