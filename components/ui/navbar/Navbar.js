import Link from 'next/link';
import Styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <div className={Styles.div}>
                <nav>
                    <div className={Styles.sep}>
                        <Link href='/'>
                            <a className='nav-link ' title='Principal Page'
                               rel="noopener noreferrer">ACADEMY</a>
                        </Link>
                        <Link href='/Profile'>
                            <a className='nav-link' title='Profile'>Perfil</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}