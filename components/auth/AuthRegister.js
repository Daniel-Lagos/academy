import Styles from './AuthScreen.module.css';

const AuthRegister = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Entro')
    }
    return (
        <form className={Styles.inputLogin}>
            <input
                placeholder="Name"
                type="text"
            />
            <br/>
            <input
                placeholder="Surname"
                type="text"
            />
            <br/>
            <input
                placeholder="Password"
                type="password"
            />
            <input
                placeholder="Email"
                type="email"
            />
            <input
                placeholder="Role"
                type="text"
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