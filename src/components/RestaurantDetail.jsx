import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err));
  }, []);
  if (!restaurant) return <Loader />;

  return (
    <div className="flex gap-5 ">
      <img className="w-[150px] rounded-md" src={restaurant.photo} alt="" />
      <div className="flex flex-col justify-between">
        <div className="text-red-500 flex gap-5">
          <p className="flex items-center gap-2">
            <FaArrowDown />
            <span className="text-gray-500">
              min sipariş {restaurant.minPrice} ₺
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaClock />
            <span className="text-gray-500">
              {restaurant.estimatedDelivery} dk
            </span>
          </p>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          {restaurant.name}
        </h1>
        <div className="flex items-center gap-2">
          <FaStar className="text-red-500" />
          <span className="text-gray-500">{restaurant.rating}</span>
          <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">
            Yorumları gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
