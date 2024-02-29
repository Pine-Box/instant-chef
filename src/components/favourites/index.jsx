import React from "react";
import FavouriteCard from "../favouriteCard";
import "./style.css";

const Favourites = () => {
  return (
    <div className="container" id="containerStyle">
      <h3>Favourites</h3>
      <div className="row" id="jumbotron">
        <FavouriteCard/>
        <FavouriteCard/>
        <FavouriteCard/>
        <FavouriteCard/>
      </div>
    </div>
  );
};

export default Favourites;
