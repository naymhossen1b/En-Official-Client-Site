import { useQuery } from "@tanstack/react-query";
import SecureAxios from "../../Hooks/SecureAxios";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

const ExploreInterests = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const { data: subCategories = [] } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      try {
        const res = await SecureAxios.get("/allSubCategories");
        return res?.data;
      } catch (error) {
        console.error("Error fetching subCategories:", error);
        throw error;
      }
    },
  });


  return (
    <div>
      <div className="uppercase font-bold py-12 text-xl text-center">
        <h2 className="text-orange-200">happy Holidays</h2>
        <h2>explore your interests</h2>
      </div>
      {/* Category slider */}
      <section>
        <div className="py-8">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={6}
            centeredSlides={true}
            spaceBetween={20}
            navigation={true}
            virtual
            autoplay={{ delay: 5000 }}
          >
            {subCategories?.map((cate) => (
              <SwiperSlide
              className="border border-gray-500 rounded-full py-3 font-medium text-center"
              key={cate._id}>{cate?.name}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ExploreInterests;
