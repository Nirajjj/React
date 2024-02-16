// import { res_API } from "./Constatns";
// import { useEffect, useState } from "react";
// const useAllRestaurant = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const [restaurantList, setrestaurantList] = useState([1]);
//     const [filterrestaurantList, setfilterrestaurantList] = useState([1]);
//     const data = await fetch(res_API);
//     //   , {
//     //   headers: {
//     //     "x-cors-api-key": "temp_d3d854db3c595f104dc6125d136a1eb1",
//     //   },
//     // });
//     const jsonData = await data.json();

//     setrestaurantList(
//       jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants
//     );
//     setfilterrestaurantList(
//       jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants
//     );
//     return [restaurantList, filterrestaurantList];
//   };
//   // const allAndFilterRes = {
//   //   restaurantList: restaurantList,
//   //   filterrestaurantList: filterrestaurantList,
//   // };
//   // return allAndFilterRes;
// };
// export default useAllRestaurant;
