import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./css/HoverText.css";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../Type";
import { useNavigate } from "react-router-dom";
import Spring from "../shared/Loading/Spring";

const CategorySection = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return <Spring />;
  }

  const categories = data?.data;

  const handleNavigate = (categoryName: string) => {
    navigate('/products', { state: { category: categoryName } });
  };

  return (
    <div className="mt-16 text-center">
      <div className="text-secondaryColor">
        <SectionTitle
          heading="exclusive"
          subHeading="Our Categories"
        ></SectionTitle>
      </div>
      <div className="mt-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {categories?.map((category: TCategory) => (
            <SwiperSlide key={category?._id}>
              <div
                className="h-[300px] rounded-md hover-area bg-black"
                style={{ backgroundImage: `url(${category?.image})` }}
                onClick={() => handleNavigate(category?.name)}
              >
                <div className="bg-[#06060693] h-full w-full">
                  <div className="hover-text">
                    <SectionTitle
                      heading={`${category?.name}`}
                      subHeading=""
                    ></SectionTitle>
                    <button
                      className="btn btn-neutral rounded-md"
                      
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
