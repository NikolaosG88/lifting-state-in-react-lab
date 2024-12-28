// src/components/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <ul className="burger-stack">
        {stack.length === 0 ? (
          <h1>Your burger is empty!</h1>
        ) : (
          stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              <p>
                <strong>{ingredient.name}</strong>
              </p>
              <button onClick={() => removeFromBurger(index)}>-</button>
            </li>
          )))}
      </ul>
    );
  };
  
  export default BurgerStack;
  