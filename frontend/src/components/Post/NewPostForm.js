/******************************* FORMULAIRE DE NEW POST **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';

/*---------fonction ormulaire de post----------*/
const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true); /* Loader si connexion lente */
    const [message, setMessage] = useState(""); /*Pr les messages de post */
    const [postPicture, setPostPicture] = useState(null); /*Pr les images */
    const [file, setFile] = useState(); /* */
    const userData = useSelector((state) => state.userReducer); /* Pr aller cherhcer le contenu du store */


    useEffect( () => {
        if (!isEmpty(userData)) setIsLoading(false); /*Si le store a la date des users alors on passe le spinner sur FAlse */
    }, [userData]);

    /* RENDU VISUEL FRONTEND */
    return (
        <div className="post-container">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : ( 
                <h2>LOOL </h2>
            )}
        </div>
    );
};

/*---------EXPORT----------*/
export default NewPostForm;