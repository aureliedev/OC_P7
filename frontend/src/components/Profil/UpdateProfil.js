/******************************* page UpdateProfil **********************************/

/*---------IMPORT----------*/ 
import React, { useState } from 'react';
import LeftNavBar from '../LeftNavBar';
import { useSelector } from "react-redux"; /*récup' des data depuis le store*/


/*---------Component UpdateProfil----------*/
const UpdateProfil = () => {
    const userData = useSelector((state) => state.userReducer);
    
    /*---------Affichage FRONTENT----------*/
    return (
        <div className='profil-containeur'>
            <LeftNavBar />
            <h1> Profil de {userData.pseudo} </h1>
        </div>
    );
};

/*---------EXPORT----------*/ 
export default UpdateProfil;