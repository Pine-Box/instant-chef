import React from "react";
import "./style.css";

const FavouriteCard = () => {
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Favourite recipes</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
