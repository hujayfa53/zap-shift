import React from "react";
import book from "../../assets/bookingIcon.png";
const HowWorks = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
      <div className="grid grid-cols-4 gap-7">

        <div className="bg-white text-black p-5 rounded-2xl">
          <img className="ml-5 mt-5" src={book} alt="" />
          <h3 className="font-semibold mt-7 ml-5">Booking Pick & Drop</h3>
          <p className="mt-5 ml-5 ">
           From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        {/* 2 */}

        <div className="bg-white text-black p-5 rounded-2xl">
          <img className="ml-5 mt-5" src={book} alt="" />
          <h3 className="font-semibold mt-7 ml-5">Cash On Delivery</h3>
          <p className="mt-5 ml-5 ">
           From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>
        {/* 3 */}
        <div className="bg-white text-black p-5 rounded-2xl">
          <img className="ml-5 mt-5" src={book} alt="" />
          <h3 className="font-semibold mt-7 ml-5">Delivery Hub</h3>
          <p className="mt-5 ml-5 ">
           From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>                                             
        {/* 4 */}
        <div className="bg-white text-black p-5 rounded-2xl">
          <img className="ml-5 mt-5" src={book} alt="" />
          <h3 className="font-semibold mt-7 ml-5">Booking SME & Corporate</h3>
          <p className="mt-5 ml-5 ">
            From personal packages to business shipments — we deliver on time, every time.                           
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
