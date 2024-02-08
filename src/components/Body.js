import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";
import res_API from "../utils/resApi";
import { Link } from "react-router-dom";
import Resinfo from "./restaurantInfo";
const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filterrestaurantList, setfilterrestaurantList] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(res_API);
    const jsonData = await data.json();

    setrestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterrestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="body-btn-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const searchFilterList = restaurantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilterrestaurantList(searchFilterList);

            // console.log(searchFilterList);
          }}
        >
          search
        </button>
        <button
          className="rating-btn"
          onClick={() => {
            const filterRestaurant = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterrestaurantList(filterRestaurant);
          }}
        >
          4.5 &#9733;
        </button>
      </div>

      <main className="card-container">
        {filterrestaurantList.map((resto) => (
          <Link key={resto.info.id} to={"/restaurant/" + resto.info.id}>
            <Card resObj={resto} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Body;
