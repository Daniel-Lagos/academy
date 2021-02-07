import Styles from './BarInfo.module.css';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function BarInfo({name, url}) {
    return (
        <main className={Styles.main}>
            <div className={Styles.test}>
                <h6>Academy profile</h6>
                <div className={Styles.imageCenter}>
                    <Image className={Styles.image} src='/profile.png' width={160} height={160}/>
                </div>
                <text>{name}</text><br/>
                <Link href={url}>
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