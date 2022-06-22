/*---------IMPORT----------*/ 
import { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";

/*---------FONCTION PROFIL----------*/ 
function Profil() {
/* token authentification de connexion */ 
const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? ( /* uid ? = true Si le token est ok, on envoi a l'update profil*/
        <h1> page UPDATE </h1>
      ) : ( /* sinon on rest la */
      <div className="log-container">
        <Log login={false} signup={true} /> {/* Log/index.js ligne 10>12 (props): pr afficher ce que l'on souhaite en premier ( Signin en l'occurence)*/}
        <div className="img-container">
          <img src="./img/icon-left-font.svg" alt="img-connexion" />
        </div>
      </div>
      )}
    </div>
  );
};

/*---------EXPORT--------*/ 
export default Profil;
