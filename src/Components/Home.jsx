import React, { useState, useEffect } from "react";
import RecipeSection from "./RecipeSection";
import idly from "../images/idly.jpg";
import dosa from "../images/dosa.jpg";
import bonda from "../images/bonda.jpg";
import upma from "../images/upma.jpg";
import paneer from "../images/paneer.jpg";
import chicken from "../images/chicken.jpg";
import egg_bhurji from "../images/egg_bhurji.jpg";
import potato from "../images/potato.jpg";
import whiteRice from "../images/whiteRice.jpg";
import biryaniRice from "../images/biryaniRice.jpg";
import chickenFriedRice from "../images/chickenFriedRice.jpg";
import tamarindRice from "../images/tamarindRice.jpg";
import samosa from "../images/samosa.jpg";
import jalebi from "../images/jalebi.jpg";
import pakoda from "../images/pakoda.jpg";
import chat from "../images/chat.jpg";

const Home = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: 50,
      behavior: "smooth",
    });
  };
  const [visibleDiv, setVisibleDiv] = useState(null);
  const [showHomeNote, setShowHomeNote] = useState(true);

  const handleButtonClick = (target) => {
    setVisibleDiv(target);
    setShowHomeNote(false);
  };

  const tiffins = [
    {
      image: idly,
      name: "Idly",
      ingredients: [
        "2 1/2 cup basmati rice",
        "1 1/2 cup urad dal",
        "1/2 tablespoon fenugreek seeds",
        "salt As required",
        "Water As required",
        "5 tablespoon sesame oil",
      ],
      process: "Soak the rice & dal for 4-6 hours and grind into a paste...",
    },
    {
      image: dosa,
      name: "Dosa",
      ingredients: [
        "2 cup idli rice",
        "1 cup urad dal",
        "2 cup water",
        "1 teaspoon fenugreek seeds",
        "1 teaspoon salt",
        "2 tablespoon refined oil",
      ],
      process: "To make dosa, soak rice and urad dal overnight, then grind them into a smooth batter and let it ferment for 8-10 hours. Heat a non-stick pan, spread a ladle of batter thinly on it, drizzle some oil around the edges, and cook until golden brown. Serve hot with chutney and sambar.",
    },
    {
      image: bonda,
      name: "Bonda",
      ingredients: [
        "2 1/2 cup basmati rice",
        "1 1/2 cup urad dal",
        "1/2 tablespoon fenugreek seeds",
        "salt As required",
        "Water As required",
        "5 tablespoon sesame oil",
      ],
      process: "Soak the rice & dal for 4-6 hours and grind into a paste...",
    },
    {
      image: upma,
      name: "Upma",
      ingredients: [
        "2 1/2 cup basmati rice",
        "1 1/2 cup urad dal",
        "1/2 tablespoon fenugreek seeds",
        "salt As required",
        "Water As required",
        "5 tablespoon sesame oil",
      ],
      process: "Soak the rice & dal for 4-6 hours and grind into a paste...",
    },
  ];

  const curries = [
    {
      image: paneer,
      name: "Paneer Curry",
      ingredients: ["Paneer", "Tomatoes", "Onions", "Spices"],
      process: "Cook the paneer with tomatoes, onions, and spices...",
    },
    {
      image: chicken,
      name: "Chicken Curry",
      ingredients: ["Chicken", "Tomatoes", "Onions", "Spices"],
      process: "Cook the paneer with tomatoes, onions, and spices...",
    },
    {
      image: egg_bhurji,
      name: "Egg Bhurji",
      ingredients: ["Eggs", "Tomatoes", "Onions", "Spices"],
      process: "Cook the paneer with tomatoes, onions, and spices...",
    },
    {
      image: potato,
      name: "Potato Curry",
      ingredients: ["Potatos", "Tomatoes", "Onions", "Spices"],
      process: "Cook the paneer with tomatoes, onions, and spices...",
    },
  ];

  const rices = [
    {
      image: whiteRice,
      name: "White Rice",
      ingredients: ["Rice", "Water"],
      process: "Cook the rice in boiling water until done...",
    },
    {
      image: biryaniRice,
      name: "Biryani Rice",
      ingredients: ["Rice", "Water"],
      process: "Cook the rice in boiling water until done...",
    },
    {
      image: tamarindRice,
      name: "Tamarind Rice",
      ingredients: ["Rice", "Water"],
      process: "Cook the rice in boiling water until done...",
    },
    {
      image: chickenFriedRice,
      name: "Chicken Fried Rice",
      ingredients: ["Rice", "Water", "chicken"],
      process: "Cook the rice in boiling water until done...",
    },
  ];

  const snacks = [
    {
      image: samosa,
      name: "Samosa",
      ingredients: ["Potatoes", "Peas", "Spices", "Pastry Dough"],
      process:
        "Make the filling, stuff it in the pastry, and fry until golden brown...",
    },
    {
      image: jalebi,
      name: "Jalebi",
      ingredients: ["Potatoes", "Peas", "Spices", "Pastry Dough"],
      process:
        "Make the filling, stuff it in the pastry, and fry until golden brown...",
    },
    {
      image: pakoda,
      name: "Pakoda",
      ingredients: ["Potatoes", "Peas", "Spices", "Pastry Dough"],
      process:
        "Make the filling, stuff it in the pastry, and fry until golden brown...",
    },
    {
      image: chat,
      name: "Chat",
      ingredients: ["Potatoes", "Peas", "Spices", "Pastry Dough"],
      process:
        "Make the filling, stuff it in the pastry, and fry until golden brown...",
    },
  ];

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="home" className="home-container">
      <h1>Recipes</h1>
      {showHomeNote && (
        <div id="home-note">
          <h4>
            Welcome to our delightful recipe website, where culinary magic meets
            creativity! Explore a diverse range of mouthwatering recipes that
            cater to every palate and occasion. From traditional tiffins to
            exotic curries, comforting rice dishes to irresistible snacks, our
            collection offers a culinary journey like no other. Each recipe is
            thoughtfully curated with detailed ingredients and step-by-step
            instructions, ensuring that your cooking experience is not just
            delicious but also rewarding. Whether you're a seasoned chef or an
            enthusiastic home cook, our platform is your culinary companion,
            inspiring you to create culinary masterpieces and embark on a
            delightful gastronomic adventure!
          </h4>
        </div>
      )}
      <button
        id="scroll-down-btn"
        className={atBottom ? "stop-animation" : ""}
        onClick={handleScrollDown}
      >
        <b>↓</b>
      </button>
      <div className="buttons-container">
        <h4>
          <button onClick={() => handleButtonClick("Tiffins")}>Tiffins</button>
          <button onClick={() => handleButtonClick("Curries")}>Curries</button>
          <button onClick={() => handleButtonClick("Rices")}>Rices</button>
          <button onClick={() => handleButtonClick("Snacks")}>Snacks</button>
        </h4>
      </div>
      <div className="recipe-sections">
        {visibleDiv === "Tiffins" && (
          <RecipeSection title="Tiffins" recipes={tiffins} />
        )}
        {visibleDiv === "Curries" && (
          <RecipeSection title="Curries" recipes={curries} />
        )}
        {visibleDiv === "Rices" && (
          <RecipeSection title="Rices" recipes={rices} />
        )}
        {visibleDiv === "Snacks" && (
          <RecipeSection title="Snacks" recipes={snacks} />
        )}
      </div>
      <h4>Many More to come...</h4>
    </div>
  );
};

export default Home;
