/******************************* page HOME **********************************/
/*---------IMPORT----------*/
import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import LeftNavBar from "../components/LeftNavBar";
import NewsFeed from "../components/NewsFeed";
import NewPostForm from "../components/Post/NewPostForm";

/*--------- fonction HOME (all actu) ----------*/
const Home = () => {
  const uid = useContext(UidContext); /*verifie si l'user est connecté */

  /* RENDU VISUEL FRONTEND */
  return (
    <div className="home">
      <LeftNavBar />
      <div className="main">
        <div className="feed-header">
          {uid ? <NewPostForm /> : null}
        </div>
        
        <NewsFeed />
      </div>
    </div>
  );
};

/*---------EXPORT----------*/
export default Home;
