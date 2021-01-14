import React from "react";
import Navbar from "../components/ui/navbar/Navbar";
import FormSearch from "../components/ui/formSearch/FormSearch";

export default function Home() {
    return (
        <>
            <div className='row'>
                <div className='col-2'>
                    <Navbar/>
                </div>
                <div className='col-7'>
                    <FormSearch/>
                </div>
                <div className='col'>
                    //TODO
                </div>
            </div>






        </>
    );
}
