import Link from 'next/link';
import Styles from './NavBar.module.css'

export default function Navbar() {
    return (
        <>
            <div className={Styles.div}>
                <nav className="navbar flex-column">

                    <div className={Styles.sep}>
                        <Link href='/'>
                            <a className='nav-link ' title='Principal Page' target="_blank"
                               rel="noopener noreferrer">Sin Nombre </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Proyecto'>Project </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Tareas'>My task </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Subir archivos'>Upload</a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Calendario'>Calendar </a>
                        </Link>
                    </div>


                </nav>
            </div>
        </>
    );
}