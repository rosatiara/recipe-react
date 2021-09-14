import React from "react";
const Recipe = ({title, calories, image, ingredients}) => {
  return (
  <div className="recipes-wrapper">
    <div className="recipe">
      <img src={image} alt="" className="foodImage" />
      <h1>{title}</h1>
      <p class>{calories} calories</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Recipe