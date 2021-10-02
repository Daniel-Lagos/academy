import Styles from './BarInfo.module.css';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function BarInfo({name, url, role}) {
    return (
        <main className={Styles.main}>
            <div className={Styles.test}>
                <h6>Academy profile</h6>
                <div className={Styles.imageCenter}>
                    <Image className={Styles.image} src='/profile.png' width={160} height={160}/>
                </div>
                <span>{name}</span><br/>
                <span>{role}</span><br/>
                <Link href={'/Profile'}>
                    <a>
                        Personal Profile
                    </a>
                </Link>
            </div>
            <div className={Styles.second}>
                <h1>Panel 1</h1>
            </div>
            <div className={Styles.second}>
                <h1>Panel 2</h1>
            </div>
        </main>
    );
}