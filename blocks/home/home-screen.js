import VideoInfo from '../../components/ui/videoInfo/VideoInfo';
import FormSearch from '../../components/ui/formSearch/FormSearch';
import Navbar from '../../components/ui/navbar/Navbar';
import BarInfo from '../../components/ui/barInfo/BarInfo';
import { useContext } from 'react';
import { SessionContext } from '../../providers/sessionContext';
import { Container, Row, Col } from 'react-bootstrap';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';

export const HomeScreen = () => {

  const { session, setSession } = useContext(SessionContext);
  let name = session.name;
  let surname = session.surname;
  let role = session.role;

  if (role === 'User_Role') {
    role = 'Estudiante';
  } else {
    role = 'Docente';
  }
  const { data } = useSWR(
    'https://backend-academy.herokuapp.com/api/user/', fetcher);

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={2}>
          <Navbar/>
        </Col>
        <Col xs={7}>
          <FormSearch/>
          <iframe src={'http://localhost:3000/contactos-enriquecidos?fr_client_id=108082&start_date=2021-12-07T00:00&end_date=2021-12-15T00:00'}/>
          <iframe
            src={'https://www.youtube.com/watch?v=0PMKa3s2xp8&list=RD0PMKa3s2xp8&start_radio=1'}/>
          {
            data?.users?.map((user) => {
              return user.content.map(
                (content, index) =>
                  <VideoInfo key={index} name={user.name} surname={user.surname}
                             role={user.role}
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
