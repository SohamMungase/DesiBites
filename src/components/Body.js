import Restaurantcard from "./Restaurantcard";
import { reslist } from "../utils.js/mockdata";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(reslist);
  console.log(listofRestaurant);
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="filter">
        <button
          className="button"
          onClick={() => {
            const filterlist = listofRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setlistofRestaurant(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">

        {listofRestaurant.map((restaurant) => {
          return (
            <Restaurantcard key={restaurant.info.id} reslist={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
