import React, {useState} from "react";
import FavouriteCard from "../favouriteCard";
import "./style.css";
import Modal from "react-modal";

const Favourites = ({ favourites, onRemove }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!favourites || !Array.isArray(favourites) || favourites.length === 0) {
    return (
      <div className="container" id="containerStyle">
        <h3>Favourites</h3>
        <p>No favourite recipes yet.</p>
      </div>
    );
  }

  return (
    <div className="container" id="containerStyle">
      <h3>Favourites</h3>
      <div className="row" id="jumbotron">

      {favourites.slice(0, 4).map((recipe) => (
          <FavouriteCard
            key={recipe.idMeal}
            recipe={recipe}
            onRemove={() => onRemove(recipe.idMeal)}
          />
        ))}
        {favourites.length > 4 && (
          <button className="btn btn-primary" onClick={openModal}>
            View All
          </button>
        )}

        {/* {favourites.map((recipe) => (
          <FavouriteCard
            key={recipe.idMeal}
            recipe={recipe}
            onRemove={() => onRemove(recipe.idMeal)}
          />
        ))} */}
        {/* <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/> */}




      </div>


      {/* Modal for View All */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="View All Modal"
      >
        <div>
          <h2>All Favourite Recipes</h2>
          {favourites.map((recipe) => (
            <FavouriteCard
              key={recipe.idMeal}
              recipe={recipe}
              onRemove={() => onRemove(recipe.idMeal)}
            />
          ))}
          <button className="btn btn-secondary" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default Favourites;
