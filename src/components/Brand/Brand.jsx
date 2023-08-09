import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Brand = () => {
    return (
        <div className='bg-base-100 py-5 px-4 md:px-12'>
            <Swiper
      className=''
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className=''><img src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://m.media-amazon.com/images/S/aplus-media/sc/1a3eba6c-351c-4391-8443-fb59652c45b0.__CR0,0,600,180_PT0_SX600_V1___.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://i0.wp.com/www.intelregion.com/wp-content/uploads/2023/01/Oraimo-Smart.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://companieslogo.com/img/orig/GOOG_BIG-63cbd9c6.png?t=1633218227" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://logos-world.net/wp-content/uploads/2023/03/Casio-Logo.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://alflip.com/uploads/all/1656416886_hoco-logo.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.salla.sa/WxjRn/RykK9z72PPdKpHNJC2jZBQw5TqCGHo0B9JFKVdyc.png" alt="" /></SwiperSlide>

    </Swiper>
        </div>
    );
};

export default Brand;