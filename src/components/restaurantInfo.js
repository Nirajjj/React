import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import RestoMenuCard from "./RestoMenuCardHead";
import MenuShimmer from "./MenuShimmer";

const Resinfo = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantInfo(resID);
  console.log(resInfo);
  const categories = resInfo.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(categories);
  return resInfo.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div className="w-[100vw] flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold my-2">Menu</h1>
      <h1 className="text-2xl font-bold my-2">
        {resInfo[resInfo.length - 1]?.card?.card?.name}
      </h1>

      <div className="">
        {categories.map((info) => (
          <RestoMenuCard resInfocard={info} />
        ))}
      </div>
    </div>
  );
};

export default Resinfo;
