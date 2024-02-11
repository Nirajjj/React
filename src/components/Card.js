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
    <div className="card">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="food-photo"
        className="card-photo"
      />
      <header>
        <h4>{name}</h4>
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
export default Card;
