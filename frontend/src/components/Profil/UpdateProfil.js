/******************************* page UpdateProfil **********************************/

/*---------IMPORT----------*/
import React, { useState } from "react";
import LeftNavBar from "../LeftNavBar";
import {
  useDispatch,
  useSelector,
} from "react-redux"; /*récup' des data depuis le store*/
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/userActions";

/*---------Component UpdateProfil----------*/
const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateFormBio, setUpdateFormBio] =
    useState(
      false
    ); /* FormBio sur false de base, au clique on pourra modif' la bio */
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleUpdateBio = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateFormBio(false);
  };

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
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateFormBio === false && (
              <>
                <p onClick={() => setUpdateFormBio(!updateFormBio)}>
                  {userData.bio}
                </p>
                <button onClick={() => setUpdateFormBio(!updateFormBio)}>
                  Modifier votre bio
                </button>
              </>
            )}
            {updateFormBio /* FormBio est sur TRUE */ && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdateBio}>
                  Valider les modifications
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/*---------EXPORT----------*/
export default UpdateProfil;
