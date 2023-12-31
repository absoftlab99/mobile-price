import React from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const SpecialSection = () => {
  return (
    <div className="">
      <div className="px-4 md:px-12 divider m-0"></div>
      <div className="grid grid-cols-12 px-4 md:px-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 py-3">
          <Swiper
            className="rounded"
            // install Swiper modules
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Home_appliances_1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Home_Appliances_2_1.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 py-3">
            <div className="grid grid-cols-12 gap-4 md:px-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-4"><Card></Card></div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4"><Card></Card></div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4"><Card></Card></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
