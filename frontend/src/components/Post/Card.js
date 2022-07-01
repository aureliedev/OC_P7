/*******************************  CARD DU FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';

/*---------Fonction des cards----------*/
const Card = ( {post} ) => {
    const [isLoading, setIsLoading] = useState(true); /* LOADING de chargement qui charge au debut(TRUE) */
    const usersData = useSelector((state) => state.usersReducer); /* Pr avoir la data des utilisateurs */
    const userData = useSelector((state) => state.userReducer); /* Pr avoir la data d'un utilisateur */
    


    // useEffect(() => {
    //      !isEmpty(usersData[0]) && setIsLoading(false); /*Si la data est présente, on retire le LOADING de fontasome */
    // }, [usersData])


    /* RENDU VISUEL FRONTEND */
    return (
        <li className="card-container" key={post._id}>
            {isLoading ? ( /* isLoading est sur TRUE alors.. */
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
        <div className="card-left">
        <h2>TEST</h2>
        </div>  

        </>
      )}
        </li>
    );
};

/*---------EXPORT----------*/
export default Card;