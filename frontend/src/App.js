/******************************* APP.JS **********************************/ 

/*---------IMPORT----------*/
import { useState, useEffect } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/";
import axios from "axios";

 /* Pour avoir le tokendans la data de l'utilisateur connecté */
const App = () => {

  const [uid, setUid] = useState(null); /* Création du uid que l'on SetUid */

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get", /*Grace au get on revoit dans la response le token de l'user*/
        url: `${process.env.REACT_APP_URL_API}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data); /* On le passe ici */
        })
        .catch((err) => console.log("Pas de token"));
    };
    fetchToken();

  }, [uid]); /* On le passe encore ici */

  return ( 
    <UidContext.Provider value={uid}> {/*Stockage userID dans l'app pour contextualiser l'appli, a chaque appel de component */}
      <Routes />
    </UidContext.Provider>
  );
};

export default App;