import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/hero.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Hero = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='swiper1'>
                    <div className='markub'>
                        <h3>Markub:The With Special Characyters</h3>
                        <p>1998Newton, 1997Newton, , 1998aNewton, ,b,Nankova and Diéguez-Aranda, 2014). The second type of SDMD is represented on density-volume chart and includes height and diameter isolines, natural thinning trajectories and stocking level lines parallel to the full density line. ...
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper2'>
                    <div className='markub'>
                        <h3>Markub:HTML Tags and Formated</h3>
                        <p>1998Newton, 1997Newton, , 1998aNewton, ,b,Nankova and Diéguez-Aranda, 2014). The second type of SDMD is represented on density-volume chart and includes height and diameter isolines, natural thinning trajectories and stocking level lines parallel to the full density line. ...
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper3'>
                    <div className='markub'>
                        <h3>Markub:Image Alignment</h3>
                        <p>1998Newton, 1997Newton, , 1998aNewton, ,b,Nankova and Diéguez-Aranda, 2014). The second type of SDMD is represented on density-volume chart and includes height and diameter isolines, natural thinning trajectories and stocking level lines parallel to the full density line. ...
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero