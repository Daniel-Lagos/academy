import Styles from './Formsearch.module.css';
import React from "react";

export default function FormSearch(){

    return(
        <div className={Styles.main}>
            <form>
                <input type="search" id="form1" placeholder='🔍 Search' className="form-control"/>
            </form>
        </div>
    )

}