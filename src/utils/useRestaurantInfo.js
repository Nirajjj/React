import resInfo_API from "../utils/resInfo";
import { useState, useEffect } from "react";
function useRestaurantInfo(resID) {
  const [resInfo, setresInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resInfo = await fetch(resInfo_API + resID);
    // , {
    //   headers: {
    //     "x-cors-api-key": "temp_d3d854db3c595f104dc6125d136a1eb1",
    //   },
    // });
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
  return resInfo;
}

export default useRestaurantInfo;
