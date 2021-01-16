import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import FormSearch from "../components/ui/formSearch/FormSearch";
import AuthRegister from "../components/auth/AuthRegister";
import AuthScreen from "../components/auth/AuthScreen";
import BarInfo from "../components/ui/barInfo/BarInfo";

export default function Home() {
    return (
        <>
            <div className='row'>
                <div className='col-sm-2'>
                    <Navbar/>
                </div>
                <div className='col-sm-7'>
                    <FormSearch/>
                </div>
                <div className='col-sm'>
                    <BarInfo name={'Arge Niño'} url={'https://github.com/ArgeNH'}/>
                </div>
            </div>
        </>
    );
}
