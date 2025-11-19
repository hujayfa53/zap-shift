import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {userName,review:testimonial,user_photoURL} = review;
  return (
    <div className="card bg-white shadow-lg rounded-2xl p-8 max-w-md">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-teal-400 text-4xl mb-4" />

      {/* Text */}
      <p className="text-black mb-6">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed  my-4">
    <img src={user_photoURL} alt="" />
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-600 rounded-full"></div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
