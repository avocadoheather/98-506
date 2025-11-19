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
 * 
 * Extension if we have time: add a delete button when you are at 1 item
 * <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
 *  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
 * </svg>
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