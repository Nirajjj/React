import { useSelector } from "react-redux";
import CartCard from "./cartCard.js";

const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((card, index) => (
        <CartCard card={card} key={index} />
      ))}
    </div>
  );
};

export default CartItems;
