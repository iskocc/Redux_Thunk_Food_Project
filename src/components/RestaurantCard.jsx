import React from "react";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  console.log(data);

  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow raunded-lg overflow-hidden hover:bg-red-200 hover:text-black hover:shadow-lg cursor-pointer transition rounded relative"
    >
      <div className="bg-green-500 p-1 px-3 text-sm absolute end-1 top-1 rounded-lg">
        {data.isOpen ? <p>Açık</p> : <p>Kapalı</p>}
      </div>
      <img
        className="w-full object-cover size-[280px]"
        src={data.photo}
        alt=""
      />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl md:text-xl font-semibold ">{data.name}</h3>
          <p className="flex items-center gap-2 text-red-500">
            <FaStar /> {data.rating}
          </p>
        </div>
        <p className="flex justify-between items-center text-sm my-3 text-gray-500">
          <span>Minimum sipariş {data.minPrice} ₺</span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {data.distance} km
          </span>
        </p>
        <div className="flex gap-4 items-center">
          <p className="flex items-center gap-2 font-semibold">
            <FaClock className=" text-red-500 " />
            <span className="text-gray-500">{data.estimatedDelivery} dk</span>
          </p>
          {data.isDeliveryFree && (
            <p className="flex items-center gap-2 text-sm">
              <MdDeliveryDining className="text-2xl text-red-500" />
              Ücretsiz
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
