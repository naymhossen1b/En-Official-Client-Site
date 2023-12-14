import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
             <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/public/assets/slider2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/assets/slider5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/assets/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/assets/slider3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/public/assets/slider4.jpg" alt="" /></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Slider;