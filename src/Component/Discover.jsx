import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const Discover = () => {
    return (
        <div className="px-[100px] bg-[#FCFCFC]">
            <p className="text-2xl font-medium mb-7 mt-16">Discover All Types</p>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><div>
                    <img src="https://i.ibb.co/XVzRbCw/Rectangle-9.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Banglow</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <img src="https://i.ibb.co/pXTtKdQ/Rectangle-10.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Villa</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <img src="https://i.ibb.co/mFqNMm5/Rectangle-11.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">Penthouse</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <img src="https://i.ibb.co/n1Dh5gK/Rectangle-12.png" alt="" />
                    <p className="bg-[#FFFFFF80] font-medium text-xl relative bottom-72 text-center">House</p>
                </div>
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default Discover;