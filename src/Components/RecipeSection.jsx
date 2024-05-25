import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeSection = ({ title, recipes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <section className="recipe-section">
        <div className="recipe-cards-container">
          {recipes.map((recipe, index) => (
            <div>
              <RecipeCard key={index} {...recipe} />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipeSection;
