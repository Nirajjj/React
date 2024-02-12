import IMG_URL from "../utils/img";
import React from "react";

const Card = (props) => {
  const { resObj } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    slaString,
    cloudinaryImageId,
  } = resObj.info;
  return (
    <div className="card relative">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="food-photo"
        className="card-photo"
      />
      <header>
        <h4 className="font-bold">{name}</h4>
        <p className="card-subinfo">{cuisines.join(", ")}</p>
      </header>
      <section className="card-info-right">
        <p>{avgRating} &#9733;</p>
        <p className="card-subinfo">{costForTwo}</p>
        <p className="card-subinfo">{slaString}</p>
      </section>
    </div>
  );
};

export const withOpenedLabal = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bottom-[20px] right-[10px] text-xs font-semibold text-[#A0A0A0]">
          Open
        </label>
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
