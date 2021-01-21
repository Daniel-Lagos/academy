import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import FormSearch from "../components/ui/formSearch/FormSearch";
import AuthRegister from "../components/auth/AuthRegister";
import AuthScreen from "../components/auth/AuthScreen";
import BarInfo from "../components/ui/barInfo/BarInfo";
import VideoInfo from "../components/ui/videoInfo/VideoInfo";

export default function Home() {
    return (
        <>
            <div className='row'>
                <div className='col-sm-2'>
                    <Navbar/>
                </div>
                <div className='col-sm-7'>
                    <FormSearch/>
                    <VideoInfo views={'27,222'} likes={'7,500'} nameAuthor={'Ing. Riaño'} duration={'25:00'}/>
                </div>
                <div className='col-sm'>
                    <BarInfo name={'Arge Niño'} url={'https://github.com/ArgeNH'}/>
                </div>
            </div>
        </>
    );
}
