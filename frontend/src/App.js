/******************************* APP.JS **********************************/ 
/*---------IMPORT----------*/
import { useState, useEffect } from "react";
import { UidContext } from "./components/AppContext";
import Routes from "./components/Routes/";
import axios from "axios";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/userActions";

/* Pour avoir le token dans la data de l'utilisateur connecté */
const App = () => {

  const [uid, setUid] = useState(null); /* Création du uid que l'on SetUid */
  const dispatch = useDispatch(); /* dispatch est MAJ a chaque action sur le site*/

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get", /*Grace au get on renvoit ds la response le token de l'user*/
        url: `${process.env.REACT_APP_URL_API}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data); /* On le passe ici */
        })
        .catch((err) => console.log("Pas de Token !"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid))
  }, [uid, dispatch]); /* On le passe encore ici */

  return ( 
    <UidContext.Provider value={uid}> {/*Stockage userID dans l'app pour contextualiser l'appli, a chaque appel de component */}
      <NavBar />
      <Routes />
    </UidContext.Provider>
  );
};

export default App;