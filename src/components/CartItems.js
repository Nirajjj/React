import { useSelector } from "react-redux";
import CartCard from "./cartCard.js";

const CartItems = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  // if (!cartItems) return;
  console.log(cartItems);
  return !cartItems.length ? (
    <div className=" w-screen flex flex-col items-center">
      <h1 className="text-center mt-4 text-lg font-semibold">Cart is empty</h1>
      <img
        className=" w-96"
        src="https://tse1.mm.bing.net/th/id/OIG4.aSlPR3BEPlYQK9BzHseW?pid=ImgGn"
        alt="animal-img"
      />
    </div>
  ) : (
    <div>
      {cartItems.map((card, index) => (
        <CartCard card={card} key={index} />
      ))}
    </div>
  );
};

export default CartItems;
