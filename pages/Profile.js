import style from '../styles/Profile.module.css';
import Navbar from '../components/ui/navbar/Navbar'
import BarInfo from '../components/ui/barInfo/BarInfo'
import {useContext} from 'react';
import {SessionContext} from '../providers/sessionContext';

const Profile = () => {

    const session = useContext(SessionContext);
    let name = session.name;
    let surname = session.surname;
    let email = session.email;
    let role = session.role;

    if (role === 'User_Role'){
        role = 'Estudiante';
    }else{
        role = 'Docente';
    }

    return(
        <>
            <div className="row">
                <div className="col-sm-2">
                    <Navbar/>
                </div>
                <div className="col-sm-7">
                    <h1>HOLA</h1>
                </div>
                <div className="col-sm">
                    <BarInfo name={`${name} ${surname}`} role={role}/>
                </div>
            </div>
        </>
    );
}
export default Profile;