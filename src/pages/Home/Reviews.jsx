import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ ReviewsPromise }) => {
  const reviews = use(ReviewsPromise);
  console.log(reviews);
  return (
    <div className="my-25">
      <div>
        <h2 className="text-3xl font-bold text-center">
          What our customers are sayings
        </h2>
        <p className="text-center  my-6 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      
        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      
    </div>
  );
};

export default Reviews;
