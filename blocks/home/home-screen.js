import VideoInfo from '../../components/ui/videoInfo/VideoInfo';
import Formsearch from '../../components/ui/formSearch/FormSearch';
import Navbar from '../../components/ui/navbar/Navbar';
import BarInfo from '../../components/ui/barInfo/BarInfo';
import {useContext} from 'react';
import {SessionContext} from '../../providers/sessionContext';

export const HomeScreen = () => {

    const {session} = useContext(SessionContext);
    let name = session.name;
    let surname = session.surname;
    let email = session.email;
    let role = session.role;

    if (role === 'User_Role'){
        role = 'Estudiante';
    }else{
        role = 'Docente';
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-2">
                    <Navbar/>
                </div>
                <div className="col-sm-7">
                    <Formsearch/>
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
                </div>
                <div className="col-sm">
                    <BarInfo name={`${name} ${surname}`} role={role}/>
                </div>
            </div>
        </>
    );
};
