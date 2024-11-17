import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../home/css/HoverText.css";

// import required modules
import { Autoplay } from "swiper/modules";
// import TestimonialsCard from "./Testimonials.Card";
import { useGetAllReviewsQuery } from "../../redux/features/review/reviewApi";
import { TReview } from "../../Type/review";
import { Rate } from "antd";

const Testimonials = () => {
  const { data: reviews } = useGetAllReviewsQuery(undefined);

  const testimonials = reviews?.data?.reduce((acc: any, cur: any) => {
    if (cur?.review?.length > 0) {
      cur?.review?.forEach((item: TReview) => {
        acc.push(item);
      });
    }
    return acc;
  }, []);

  return (
    <div className="mt-16 px-5 xl:px-0 text-center">
      <div className="text-secondaryColor">
        <SectionTitle
          heading="What Our Customers Say"
          subHeading="Honest Reviews From Our Clients"
        />
      </div>

      <div className="mt-3">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper relative"
        >
          {/* Dynamically generate Swiper slides for each testimonial */}
          {testimonials?.map((item: TReview, index: number) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card bg-white shadow-lg rounded-xl p-2 transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <p className="text-gray-700 italic mb-2 text-lg leading-relaxed">
                  "{item?.review || "No review available."}"
                </p>

                {/* User Information */}
                <div className="flex items-center justify-center mt-2">
                  <img
                    src={item?.userId?.image || "/placeholder-avatar.png"}
                    alt={item?.userId?.name || "User Avatar"}
                    className="w-16 h-16 rounded-full border-4 border-primary"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item?.userId?.name || "Anonymous"}
                    </h3>
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={item?.rating}
                    className="custom-rate "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
