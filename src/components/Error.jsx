import React from "react";
import { BiSolidError } from "react-icons/bi";

const Error = ({ msg, retry }) => {
  return (
    <div>
      <div className="bg-red-100 text-black mt-20 p-10 flex flex-col items-center rounded-lg text-lg">
        <p>Üzgünüz bir hata oluştu!</p>
        <b>{msg}</b>
        <p>
          <BiSolidError className="text-[72px] mt-5 text-red-500" />
        </p>
      </div>

      {retry && (
        <div className="flex justify-center mt-10">
          <button
            onClick={retry}
            className="border p-2 px-4 rounded-md hover:bg-red-100 hover:text-black"
          >
            Tekrar Dene
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
