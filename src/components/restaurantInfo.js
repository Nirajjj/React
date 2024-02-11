import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const Resinfo = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantInfo(resID);

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Menu</h1>
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
