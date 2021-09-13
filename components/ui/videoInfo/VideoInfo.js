import Link from 'next/link';
import Image from 'next/image';

import Styles from './VideoInfo.module.css';

export default function VideoInfo(props) {
    return (
        <>
            <div className={Styles.main}>
                <div className='row'>
                    <div className={`${Styles.cont} col-sm-4`}>
                        <Image className={Styles.image} src='/test.png' width={250} height={150}/>
                    </div>
                    <div className={`${Styles.contTwo} col-sm-8`}>
                        <h4>Titulo del video segun la categoria desde la API de Youtube 🚀</h4>
                        <p>👁‍🗨 {props.views} views &nbsp;&nbsp;&nbsp;&nbsp; 👍🏻 {props.likes} likes</p>
                            <h6>Autor: {props.nameAuthor}</h6>
                            <h6>Duración: {props.duration} min</h6>
                    </div>
                </div>
            </div>
        </>
    );
}