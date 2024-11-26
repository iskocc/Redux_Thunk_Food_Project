import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { updateCartItem, deleteItem } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(updateCartItem(item.id, item.amount + 1));
  };
  const handleDelete = () => {
    item.amount > 1
      ? dispatch(updateCartItem(item.id, item.amount - 1))
      : dispatch(deleteItem(item.id));
  };
  console.log(item);

  return (
    <div className="flex gap-4 border mb-10 rounded-lg p-4">
      <img src={item.photo} alt="food" className="w-[115px] rounded-lg" />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantName}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{item.price}₺</p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDelete}
              className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg"
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="font-semibold">{item.amount}</span>
            <button
              onClick={handleAdd}
              className="p-3 text-green-500 hover:bg-green-100 transition rounded-lg"
            >
              {<FaPlus />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
