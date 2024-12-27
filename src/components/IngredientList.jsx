// src/components/IngredientList.jsx

import { availableIngredients } from "../App";

const IngredientList = ({addToBurger}) => {
    return <ul>
        {
            availableIngredients.map((ingredient, index) => (
                <li key={index}>
                     <p><strong>{ingredient.name}</strong> </p>
                     <button onClick={() => addToBurger(ingredient)}>Add</button>
                </li>

            ))}
        </ul>
  };
  
  export default IngredientList;
  