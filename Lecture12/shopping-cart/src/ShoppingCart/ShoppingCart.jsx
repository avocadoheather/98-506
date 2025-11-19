/**
 * A shopping cart component which renders a list of the items we added to our cart.
 * 
 * Each element in the shopping cart has a name, cost, and number
 * 
 * We want to show it in the format:
 * 
 * Quantity     Item            Cost
 * 2            Banana          $3.4
 * Total                        $3.4
 */
export default function ShoppingCart({shoppingCart}) {
    // Calculate the total cost of our shopping cart, and place it in total
    const total = shoppingCart.reduce((acc, current) => acc + current.cost * current.number, 0);
        // acc -> accumulator; second argument 0 is starting value of acc
    
    
    //return JSON.stringify(shoppingCart);
    return `$${total}`;
    // return shoppingCart.map(e => <div>{e.name}</div>)
}