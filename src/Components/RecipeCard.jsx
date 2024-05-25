import React, { useState } from "react";

const RecipeCard = ({ image, name, ingredients, process }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div id="recipe">
      <div className="image-container">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <div id="cards">
        <div id="card-container">
          <div
            id="card"
            className={flipped ? "flipped" : ""}
            onClick={handleFlip}
          >
            <div id="card-inner">
              <div id="ingredients" className="card-front">
                <span id="flip-icon" aria-label="Flip Card">
                  <i class="fa-solid fa-repeat"></i>
                </span>
                <p style={{ fontSize: "30px" }}>
                  <b>Ingredients</b>
                </p>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div id="process" className="card-back">
                <span id="flip-icon" aria-label="Flip Card">
                  <i class="fa-solid fa-repeat"></i>
                </span>
                <p style={{ fontSize: "30px" }}>
                  <b>Process</b>
                </p>
                <p>{process}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
