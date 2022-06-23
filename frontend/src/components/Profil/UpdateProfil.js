/******************************* page UpdateProfil **********************************/

/*---------IMPORT----------*/
import React from "react";
import LeftNavBar from "../LeftNavBar";
import { useSelector } from "react-redux"; /*récup' des data depuis le store*/
import UploadImg from "./UploadImg";

/*---------Component UpdateProfil----------*/
const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);

  /*--Affichage FRONTENT--*/
  return (
    <div className="profil-container">
      <LeftNavBar />
      <h1>Profil de {userData.pseudo}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="img de profil utilisateur" />
          <UploadImg />
        </div>
      </div>
    </div>
  );
};

/*---------EXPORT----------*/
export default UpdateProfil;
