import { IMG_URL } from "../utils/constatns";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ResMenuCardData = ({ resData }) => {
  const { itemCards } = resData?.card?.card;
  const dispatch = useDispatch();
  const handleClick = (card) => {
    dispatch(addItem(card));
  };
  const price =
    itemCards?.card?.info?.price || itemCards?.card?.info?.defaultPrice;
  return itemCards.map((card) => (
    <div className="flex justify-between items-center border-b-2 border-gray-400 mb-2 pb-2 transition-all duration-1000">
      <div className="w-9/12">
        <h3 className="font-medium">{card?.card?.info?.name}</h3>
        <p className="text-sm ">
          ₹
          {card?.card?.info?.price / 100 ||
            card?.card?.info?.defaultPrice / 100}
        </p>
      </div>
      <div className="w-3/12 bg-blue-300 rounded-lg relative">
        <img src={IMG_URL + card?.card?.info?.imageId} className="rounded-md" />
        <button
          className="absolute bg-white text-[#43766C] right-0 font-semibold border-[#43766C] left-0 ml-auto mr-auto rounded-md w-12 bottom-0 hover:bg-[#43766C] hover:text-white border"
          onClick={() => handleClick(card)}
        >
          add+
        </button>
      </div>
    </div>
  ));
};

export default ResMenuCardData;
