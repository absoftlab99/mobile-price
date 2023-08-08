import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
    <div>
      <Swiper
      
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_N_2_1_1_.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_9_2_1_.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Galaxy_Z_Fold5_Z_Flip5_big_banner_1_.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_5_1_.jpg" alt="" /></SwiperSlide>

    </Swiper>
    </div>
  );
};

export default Carousel;
