import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import RestoMenuCard from "./RestoMenuCard";
import MenuShimmer from "./MenuShimmer";

const Resinfo = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantInfo(resID);

  return resInfo.length === 0 ? (
    <MenuShimmer />
  ) : (
    <div>
      <h1 className="text-center text-xl font-semibold mb-5">Menu</h1>
      {/* <ul>
        {resInfo.map((info) => {
          return (
            <li key={info?.card?.info?.id}>
              {info.card?.info?.name}- Rs.{info.card?.info?.price / 100}
            </li>
          );
        })}
      </ul> */}
      <div className="w-lvw h-[100%] flex flex-wrap justify-center gap-9">
        {resInfo.map((info) => (
          <RestoMenuCard resInfocard={info} />
        ))}
      </div>
    </div>
  );
};

export default Resinfo;
