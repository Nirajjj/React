import { useEffect, useState } from "react";
import Card, { withOpenedLabal } from "./Card";
import Shimmer from "./shimmer";
import { res_API } from "../utils/constatns";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import React from "react";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filterrestaurantList, setfilterrestaurantList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const OpenedRes = withOpenedLabal(Card);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(res_API);
    // , {
    //   headers: {
    //     "x-cors-api-key": "temp_d3d854db3c595f104dc6125d136a1eb1",
    //   },
    // });
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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h2>Check your internet connection! 🔴</h2>;

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
          Search
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
        <button
          className="rating-btn"
          onClick={() => {
            setfilterrestaurantList(restaurantList);
          }}
        >
          all
        </button>
      </div>

      <main className="card-container">
        {filterrestaurantList.map((resto) => (
          <Link key={resto.info.id} to={"/restaurant/" + resto.info.id}>
            {resto?.info?.isOpen ? (
              <OpenedRes resObj={resto} />
            ) : (
              <Card resObj={resto} />
            )}
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Body;
// export restaurantList;
