import Link from 'next/link';
import Styles from './Navbar.module.css';
import {Stack} from "react-bootstrap";

export default function Navbar() {
    return (
        <>
            <div className={Styles.main}>
                <Stack gap={5}>
                    <div className={Styles.first}>
                        <Link href='/'>
                            <a className='nav-link ' title='Principal Page'
                               rel="noopener noreferrer">ACADEMY</a>
                        </Link>
                    </div>
                    <div className={Styles.image}>
                        <img src={'/logo.png'} alt={'Logo'} width={100} height={100}/>
                    </div>
                    <div className={Styles.image}>
                        <img src={'/video.svg'} alt={'Logo'} width={100} height={100}/>
                    </div>
                    <div className={Styles.image}>
                        <img src={'/logo.png'} alt={'Logo'} width={100} height={100}/>
                    </div>
                    <div className={Styles.image}>
                        <img src={'/video.svg'} alt={'Logo'} width={100} height={100}/>
                    </div>
                </Stack>
            </div>
        </>
    );
}