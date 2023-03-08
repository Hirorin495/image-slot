import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import "swiper/css";
import 'swiper/css/bundle';
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation, Autoplay]) 

type Props = {
  images: Array<string>
};

const Slot = (props: Props) => {
  const swiperRef = useRef() as any;
  const images = props.images;
  const slot = images.map((src: string, index: number) => 
    <SwiperSlide key={`${index}`} style={{margin: 0}}>
      <img src={src} alt="" />
    </SwiperSlide>
  );

  const autoPlayImage = {
    delay: 1,
    disableOnInteraction: true,
  };

  const stopImage = () => {
    swiperRef.current.swiper.autoplay.stop();
  }

  return (
    <div onClick={stopImage}>
      <Swiper
        ref={swiperRef}
        autoplay={autoPlayImage}
        slidesPerView={1}
        loop={true}>
        {slot}
      </Swiper>
    </div>
  )
}

export default Slot
