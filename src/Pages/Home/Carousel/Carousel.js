import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Elements1 from './Elements';
import Elements2 from './Elements2';

const Carousel = () => {
    return (
        <div className='my-10'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Elements1 /></SwiperSlide>
                    <SwiperSlide><Elements2 /></SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Carousel;






