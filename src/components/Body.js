import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./shimmer";
const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filterrestaurantList, setfilterrestaurantList] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Nirajjj/json-hosting/restaurant"
    );
    const jsonData = await data.json();
    setrestaurantList(jsonData);
    setfilterrestaurantList(jsonData);
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

            console.log(searchFilterList);
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
            setrestaurantList(filterRestaurant);
          }}
        >
          4.5 &#9733;
        </button>
      </div>

      <main className="card-container">
        {filterrestaurantList.map((resto) => (
          <Card key={resto.info.id} resObj={resto} />
        ))}
      </main>
    </div>
  );
};

export default Body;
