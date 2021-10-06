import VideoInfo from '../../components/ui/videoInfo/VideoInfo';
import FormSearch from '../../components/ui/formSearch/FormSearch';
import Navbar from '../../components/ui/navbar/Navbar';
import BarInfo from '../../components/ui/barInfo/BarInfo';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';
import {Container, Row, Col} from 'react-bootstrap';
import useSWR from 'swr';
import {fetcher} from '../../utils/fetcher';

export const HomeScreen = () => {

    const {session, setSession} = useContext(SessionContext);
    let name = session.name;
    let surname = session.surname;
    let role = session.role;

    if (role === 'User_Role') {
        role = 'Estudiante';
    } else {
        role = 'Docente';
    }
    const {data, error} = useSWR(
        'https://backend-academy.herokuapp.com/api/user/', fetcher);

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={2}>
                    <Navbar/>
                </Col>
                <Col xs={7}>
                    <FormSearch/>
                    {
                        data?.users?.map((user) => {
                            return user.content.map(
                                (content, index) =>
                                    <VideoInfo key={index} name={user.name} surname={user.surname}
                                               role={user.role === 'User_Role' ? 'Estudiante' : 'Docente'}
                                               url={content}/>);
                        })
                    }

                </Col>
                <Col xs={3}>
                    <BarInfo nick={`${name} ${surname}`}
                             roleF={role}/>
                </Col>
            </Row>
        </Container>
    );
};
