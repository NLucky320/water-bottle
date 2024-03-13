
import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    const { name, img, id, price, quantity, ratings } = bottle;
    return (
        <div className="bottle">
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <p>quantity: {quantity}</p>
            <p><small>ratings: {ratings}</small></p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;