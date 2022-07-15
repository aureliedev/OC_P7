/*******************************  DELETE CARD **********************************/
/*---------IMPORT----------*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';

/*---------fonction DeleteCard ---------*/
const DeleteCard = (props) => {

    const dispatch = useDispatch();
    const deletePublication = () => dispatch(deletePost(props.id));

    return (
        <div onClick={() => { /* Demande de confirmation de suppression du post */
            if (window.confirm("Voulez-vous supprimer cette publication ?")) {
                deletePublication(); /*Si ok pr suppression du post, on lance la fonction de suppression */
            }
            }}>

           <img src="./img/icons/trash.svg" alt="Supprimer le post" />     
        </div>
    );
};
/*---------EXPORT---------*/
export default DeleteCard;