/*******************************  CARD DU FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useState } from 'react';

/*---------Fonction des cards----------*/
const Card = ( {post} ) => {
    const [isLoading, setIsLoading] = useState(true); /* LOADING de rechargement qui charge au debut(TRUE) */


    
    /* RENDU VISUEL FRONTEND */
    return (
        <li className="card-container" key={post._id}>
            {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <h2>TEST</h2>
      )}
        </li>
    );
};

/*---------EXPORT----------*/
export default Card;