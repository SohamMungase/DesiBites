import Restaurantcard from "./Restaurantcard";
import { reslist } from "../utils.js/mockdata";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import React from "react";
import { Link } from "react-router";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  if (listofRestaurant.length === 0) {
    return <Loader />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurants..................."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const filteredList = listofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="button"
          onClick={() => {
            const filterlist = listofRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurants(filterlist);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            {/* <Restaurantcard key={restaurant.info.id} reslist={restaurant} /> */},
            <Link to={"/restaurant/" + restaurant.info.id } key={restaurant.info.id}><Restaurantcard resData={restaurant}/></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
