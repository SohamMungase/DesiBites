import { CDN_url } from "../utils.js/constant";

const Restaurantcard = (props) => {
  const { reslist } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = reslist.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_url + cloudinaryImageId}
      />

      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime}Minutes</h4>
    </div>
  );
};

export default Restaurantcard;