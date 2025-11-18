import { useState } from "react";
import "./styling.css";
import { useEffect } from "react";

/**
 * A product we have.
 * Structure:
 * ----------------------
 * | [image of product] |
 * |   [Add to Cart]    |
 * ----------------------
 * 
 * Once we hit "Add to cart",
 * show:
 * 
 * [ - ]     1      [  + ]
 * At the bottom
 */
export default function Product({
    name,
    url,
    cost,
    onChange
}) {
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        onChange(number);
    }, [number]);

    const cartButton = <div className="cart-button">
        {
            number === 0 ? (
                <button onClick={() => setNumber(number + 1)}>Add to Cart</button>
            ):
            <>
                <button onClick={() => setNumber(number + 1)}>+</button>
                {number}
                <button onClick={() => setNumber(number - 1)}>-</button>
            </>
        }
    </div>;

    return <div className="product">
        <img src={url} />
        <strong>{name}</strong>
        ${cost} each

        {cartButton}
    </div>;
}