import Link from 'next/link';
import Styles from '../../../styles/Navigation.module.css'

export default function Nav() {
    return (
            <div className={Styles.div}>
                <nav>

                    <div className={Styles.sep}>
                        <Link href='/'>
                            <a className='nav-link ' title='Principal Page'>🗺 ACADEMY</a>
                        </Link>
                    </div>
                        <Link href='/'>
                            <a className='nav-link' title='Proyecto'> 📔 Project </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Tareas'> 📖 My task </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Subir archivos'> 📤 Upload</a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Calendario'> 📅 Calendar </a>
                        </Link>
                </nav>
            </div>
    );
}