import VideoInfo from '../../components/ui/videoInfo/VideoInfo';
import FormSearch from '../../components/ui/formSearch/FormSearch';
import Navbar from '../../components/ui/navbar/Navbar';
import BarInfo from '../../components/ui/barInfo/BarInfo';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {Container, Row, Col} from "react-bootstrap";

export const HomeScreen = () => {

    const {session, setSession} = useContext(SessionContext);
    let id = session.uid;
    let name = session.name;
    let surname = session.surname;
    let email = session.email;
    let role = session.role;

    if (role === 'User_Role') {
        role = 'Estudiante';
    } else {
        role = 'Docente';
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={2}>
                    <Navbar/>
                </Col>
                <Col xs={7}>
                    <FormSearch/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Julio Profe'}
                               duration={'25:00'}/>
                </Col>
                <Col xs={3}>
                    <BarInfo nick={`${name} ${surname}`}
                             roleF={role}/>
                </Col>
            </Row>
        </Container>
    );
};
