import { useEffect, useState } from "react";
import resInfo_API from "../utils/resInfo";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const Resinfo = () => {
  const [resInfo, setresInfo] = useState([]);
  const { resID } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resInfo = await fetch(resInfo_API + resID, {
      headers: {
        "x-cors-api-key": "temp_d3d854db3c595f104dc6125d136a1eb1",
      },
    });
    const jsonData = await resInfo.json();
    console.log(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card.card.itemCards ||
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card.categories[0].itemCards
    );
    setresInfo(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card.card.itemCards ||
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card.categories[0].itemCards
    );
  };
  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Menu</h1>
      {/* <h2>{resInfo.}</h2> */}
      <ul>
        {resInfo.map((info) => {
          return (
            <li key={info?.card?.info?.id}>
              {info.card?.info?.name}- Rs.{info.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Resinfo;
