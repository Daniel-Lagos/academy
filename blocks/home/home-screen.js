import VideoInfo from '../../components/ui/videoInfo/VideoInfo';
import Formsearch from '../../components/ui/formSearch/FormSearch';
import Navbar from '../../components/ui/navbar/Navbar';
import BarInfo from '../../components/ui/barInfo/BarInfo';

export const HomeScreen = () => {
  return (
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
        <BarInfo name={'Arge Niño'} url={'https://github.com/Daniel-Lagos'}/>
      </div>
    </div>
  );
};
