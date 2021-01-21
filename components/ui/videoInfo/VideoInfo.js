import Link from 'next/link';
import Image from 'next/image';

import Styles from './VideoInfo.module.css';

export default function VideoInfo(){
    return (
      <>
          <div className={Styles.main}>
                <div className='row'>
                    <div className={Styles.cont}>
                        <div className='col-4'>
                            <Image className={Styles.image} src='/profile.jpg' width={800} height={550}/>
                        </div>
                    </div>
                    <div className='col-8'>
                        Contenedor 2
                    </div>
                </div>
          </div>
      </>
    );
}