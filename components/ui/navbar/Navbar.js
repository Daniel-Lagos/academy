import Link from 'next/link';
import Styles from './Navbar.module.css';
import React from "react";

export default function Navbar() {
    return (
        <>
            <div className={Styles.div}>
                <nav>
                    <div className={Styles.sep}>
                        <Link href='/'>
                            <a className='nav-link ' title='Principal Page' target="_blank"
                               rel="noopener noreferrer">ACADEMY</a>
                        </Link>

                        <Link href='/'>
                            <a className='nav-link' title='Proyecto'>Project </a>
                        </Link>
                        <Link href='/'>
                            <a className='nav-link' title='Subir archivos'>Upload</a>
                        </Link>
                        <Link href='/Profile'>
                            <a className='nav-link' title='Calendario'>Profile</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}