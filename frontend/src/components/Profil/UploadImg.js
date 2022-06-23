/******************************* page UpdloadImg **********************************/

/*---------IMPORT----------*/
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/userActions";

/*---------Component UpdateIMG----------*/
const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch(); /*Pr envoyer l'img */ 
  const userData = useSelector((state) => state.userReducer);

  const handlePicture = (e) => {
    e.preventDefault(); /* pas de rechargement de page */
  
    const data = new FormData(); /* Objet JS pour mettre des infos a passer*/
    data.append("name", userData.pseudo); /* data.append: rattache les elements */
    data.append("userId", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id));
    };

  /*--Affichage FRONTENT--*/
  return (
    <form action="" onSubmit={handlePicture} className="upload-pic">
      <label htmlFor="file">Changer l'image</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".jpg, .jpeg, .png"
        onChange={(e) =>
          setFile(e.target.files[0])
        } /*stock la variable de l'img*/
      />
      <br/>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

/*---------EXPORT----------*/
export default UploadImg;
