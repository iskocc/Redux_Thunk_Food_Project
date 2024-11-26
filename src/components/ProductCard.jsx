import React from "react";

import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartItem } from "../redux/actions/cartAction";
import Restaurant from "./../pages/Restaurant";

const ProductCard = ({ item }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const found = cart.find((i) => i.productId === item.id);
  const handleAdd = () => {
    found
      ? dispatch(updateCartItem(found.id, found.amount + 1))
      : dispatch(addToCart(item));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:text-black hover:scale-[1.02] cursor-pointer transition duration-300">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-semibold">{item.title}</h1>
          <p className="text-gray-500 my-1">{item.desc}</p>
        </div>
        <p>{item.price} ₺</p>
      </div>
      <div className=" relative">
        <img
          src={item.photo}
          alt="food"
          className="rounded-md object-cover size-full"
        />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white text-red-500 rounded-full hover:bg-red-100 size-8 grid place-items-center"
        >
          {" "}
          {found ? <span>{found.amount}</span> : <TiShoppingCart />}
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
