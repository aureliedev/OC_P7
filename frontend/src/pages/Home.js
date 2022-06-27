/******************************* page HOME **********************************/
/*---------IMPORT----------*/
import React from "react";
import LeftNavBar from "../components/LeftNavBar";
import NewsFeed from "../components/NewsFeed";

/*-------------------*/
const Home = () => {
  return (
    <div className="home">
      <LeftNavBar />

      <div className="main">
        <NewsFeed />
        
      </div>
    </div>
  );
};

/*---------EXPORT----------*/
export default Home;
