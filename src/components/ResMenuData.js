import { IMG_URL } from "../utils/constatns";

const ResMenuCardData = ({ resData }) => {
  const { itemCards } = resData?.card?.card;
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
        <div className="absolute bg-white text-green-400 right-0 font-semibold border-green-600 left-0 ml-auto mr-auto rounded-md px-1 py-[1px] w-12 bottom-0 hover:bg-green-500 hover:text-white ">
          add+
        </div>
      </div>
    </div>
  ));
};

export default ResMenuCardData;
