import Styles from './AuthScreen.module.css';

const AuthRegister = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entro')
    }
    return (
        <form>
            <input
                className={Styles.inputLogin}
                placeholder="Name"
                type="text"
            />
            <br/>
            <input
                className={Styles.inputLogin}
                placeholder="Surname"
                type="text"
            />
            <br/>
            <input
                className={Styles.inputLogin}
                placeholder="Password"
                type="password"
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