import { useState } from "react";
import { IMG_URL } from "../utils/constatns";
import ResMenuCardData from "./ResMenuData";
const RestoMenuCard = ({ resInfocard, showItems, setShowIndex }) => {
  const { title } = resInfocard?.card?.card;
  const { itemCards } = resInfocard?.card?.card;
  function dropDown() {
    setShowIndex();
  }
  return (
    <div className=" mb-3 w-[50vw] cursor-pointer transition-all duration-1000">
      <div
        className="h-5 flex justify-between items-center rounded-md bg-slate-300 p-5 pl-2"
        onClick={dropDown}
      >
        <h2 className="font-bold">
          {title}({itemCards.length})
        </h2>
        {showItems ? (
          <span className="flex justify-center items-center text-gray-700">
            &#x25B2;
          </span>
        ) : (
          <span className="flex justify-center items-center text-gray-700">
            &#9660;
          </span>
        )}
      </div>

      <div>{showItems && <ResMenuCardData resData={resInfocard} />}</div>
    </div>
  );
};

export default RestoMenuCard;
