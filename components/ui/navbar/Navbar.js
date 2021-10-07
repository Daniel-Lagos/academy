import Link from 'next/link';
import Styles from './Navbar.module.css';
import {Stack} from "react-bootstrap";

export default function Navbar() {
    return (
        <>
            <div className={Styles.main}>
                <Stack gap={4}>
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
                    <div className={Styles.second}>
                        <h3>Created by:</h3>
                    </div>
                    <div className={Styles.second}>
                        <a href={'https://github.com/Daniel-Lagos'}>Daniel Lagos</a>
                    </div>
                    <div className={Styles.second}>
                        <a href={'https://github.com/ArgeNH'}>Arge Niño</a>
                    </div>
                </Stack>
            </div>
        </>
    );
}