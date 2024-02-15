import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import RestoMenuCard from "./RestoMenuCard";
import MenuShimmer from "./MenuShimmer";

const Resinfo = () => {
  const { resID } = useParams();
  debugger;
  const resInfo = useRestaurantInfo(resID);
  return resInfo.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div>
      <h1 className="text-center text-xl font-semibold mb-5">Menu</h1>

      <div className="w-lvw h-[100%] flex flex-wrap justify-center gap-9">
        {resInfo.map((info) => (
          <RestoMenuCard resInfocard={info} />
        ))}
      </div>
    </div>
  );
};

export default Resinfo;
