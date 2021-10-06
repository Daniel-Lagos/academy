import Styles from './VideoInfo.module.css';
import { Col, Ratio, Row } from 'react-bootstrap';

const VideoCard = ({ url, name, surname, role }) => {

  return (
    <div className={Styles.main}>
      <Row md={2}>
        <Col sm={5} className={Styles.cont}>
          <Ratio aspectRatio={'16x9'}>
            <video
              src={url}
              controls>
              Video no soportado...
            </video>
          </Ratio>
        </Col>
        <Col sm={6} className={Styles.contTwo}>
          <h4>Video educativo</h4>
          <p>👁‍🗨 22.222 views &nbsp;&nbsp;&nbsp;&nbsp; 👍🏻 75 likes</p>
          <h6>Subido por: {name} {surname}</h6>
          <h6>Rol: {role}</h6>
        </Col>
      </Row>
    </div>
  );
};

export default VideoCard;
