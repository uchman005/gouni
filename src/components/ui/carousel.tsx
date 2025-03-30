"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Carousel = () => {
    const swiperRef = useRef(null);

    return (
        <div className="relative">
            {/* Swiper Container */}
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                loop={true}
                className="relative"
            >
                <SwiperSlide>
                    <Image width={500} height={500} src="/image1.jpg" alt="Slide 1" className="w-full h-[500px] object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40">
                        <h1 className="text-4xl font-bold">Welcome to Godfrey Okoye University</h1>
                        <p className="text-lg">A Place of Academic Excellence and Innovation</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={500} height={500} src="/image2.jpg" alt="Slide 2" className="w-full h-[500px] object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40">
                        <h1 className="text-4xl font-bold">Transform Your Future</h1>
                        <p className="text-lg">Join Our Diverse Community of Scholars</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={500} height={500} src="/image3.jpg" alt="Slide 3" className="w-full h-[500px] object-cover object-top" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40">
                        <h1 className="text-4xl font-bold">Excellence in Education</h1>
                        <p className="text-lg">Shaping Leaders for a Brighter Tomorrow</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full">
                <FaArrowLeft size={24} />
            </button>
            <button className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full">
                <FaArrowRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
