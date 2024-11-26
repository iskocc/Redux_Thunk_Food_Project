import React from "react";

const OrderBox = ({ cart }) => {
  const totalAmount = cart.reduce((a, b) => a + b.amount, 0);
  const totalPrice = cart.reduce((a, b) => a + b.amount * b.price, 0);
  return (
    <div className="p-5 rounded-md border md:order-2 h-fit">
      <h2 className="font-semibold text-xl">Sipariş Detaylar</h2>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-500">Ürün Miktarı:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-500">Ürün Miktarı:</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)} ₺
        </span>
      </p>
      <button className="border p-2 px-4 rounded-md text-white bg-red-500 hover:bg-red-700">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderBox;
