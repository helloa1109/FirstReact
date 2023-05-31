import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
// Import Swiper styles
import '../coverflow.css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import {EffectCoverflow, Mousewheel, Pagination} from "swiper";

export default function App() {

    return (
        <>
            <Swiper style={{backgroundColor:'black',height:'600px'}}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 2,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                navigation={true} // 네비게이션 버튼
                mousewheel={true} // 마우스 휠
                pagination={false}
                modules={[EffectCoverflow, Pagination, Mousewheel]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide>
                        <div className="reflection-container">
                            <img className="original-image" src="/img/danicalifornia.png" alt="Image" />
                            <img className="reflection-image" src="/img/danicalifornia.png" alt="Reflection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="reflection-container">
                        <img className="original-image" src='/img/sum41.png' alt="Image"/>
                            <img className="reflection-image" src="/img/sum41.png" alt="Reflection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="reflection-container">
                        <img className="original-image" src='/img/nir.png' alt="Image"/>
                            <img className="reflection-image" src="/img/nir.png" alt="Reflection" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="reflection-container">
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
                    </SwiperSlide>
                </div>
            </Swiper>
        </>
    );
}