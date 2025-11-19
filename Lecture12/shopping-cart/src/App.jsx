/**
 * This is the React entry point for our app.
 */
import { useState } from 'react'
// Import a stylesheet specific to this component.
import './App.css'

// A list of all available products we have
import GetAvailableProducts from "./AvailableProducts.js";

// A component for each product
import Product from "./Product/Product.jsx";

import ShoppingCart from "./ShoppingCart/ShoppingCart.jsx";

function App() {
  // List of items we have in our shopping cart
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <h1>My Shop</h1>
      
      {/* List of products available */}
      <h2>Products Available</h2>
      <div className="product-list">
        {
          GetAvailableProducts().map(({name, url, cost}, i) => {
            return <Product
              name={name}
              url={url}
              cost={cost}
              key={i}
              onChange={(number) => {
                const newShoppingCart = [...shoppingCart];
                // Find this product in the shopping cart, if it's in there
                const index = newShoppingCart.findIndex(e => e.name == name);
                if(index !== -1) {
                  if(number !== 0) {
                    newShoppingCart[index].number = number;
                  }
                  else {
                    newShoppingCart.splice(index, 1);
                  }
                } else if(number !== 0) {
                  newShoppingCart.push({ name, cost, number });
                }
                setShoppingCart(newShoppingCart);
              }}
              />
          })
        }
      </div>

      {/* Shopping cart */}
      <h2>Shopping Cart</h2>
      <ShoppingCart shoppingCart={shoppingCart} />
    </>
  )
}

export default App
