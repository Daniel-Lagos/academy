import Styles from './VideoInfo.module.css';
import {useState, useEffect} from 'react';
import {Col, Ratio, Row} from "react-bootstrap";

const VideoCard = ({props}) => {
    return (
        <div className={Styles.main}>
            <Row md={2}>
                <Col sm={5} className={Styles.cont}>
                    <Ratio aspectRatio={'16x9'}>
                        <video
                            src={props.url}
                            controls>
                            Video no soportado....
                        </video>
                    </Ratio>
                </Col>
                <Col sm={6} className={Styles.contTwo}>
                    <h4>Titulo del video segun la categoria desde la API de Youtube 🚀</h4>
                    <p>👁‍🗨 22.222 views &nbsp;&nbsp;&nbsp;&nbsp; 👍🏻 75 likes</p>
                    <h6>Subido por: {props.name} {props.surname}</h6>
                    <h6>Rol: {props.role}</h6>
                </Col>
            </Row>
        </div>
    );
}

export default function VideoInfo() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [url, setUrl] = useState('');
    const [dateForVideos, setDateForVideos] = useState([]);

    useEffect(() => {
        getVideos();

    }, []);

    const getVideos = async () => {
        const response = await fetch('https://backend-academy.herokuapp.com/api/user/');
        const data = await response.json();
        setDateForVideos(data);
    }

    async function dataFet() {
        const response = await fetch('https://backend-academy.herokuapp.com/api/user/');
        const data = await response.json();
        //console.log(data);
        setDataDashboard(data);
        return data;
    }


    return (

        <>
            <h1>d</h1>
        </>

    );
}