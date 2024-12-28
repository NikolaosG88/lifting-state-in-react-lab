// src/components/IngredientList.jsx

import { availableIngredients } from "../App";

const IngredientList = ({ addToBurger }) => {
    return (
      <ul className="ingredient-list">
        {
        availableIngredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            <p>
              <strong>{ingredient.name}</strong>
            </p>
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };

  
  export default IngredientList;
  