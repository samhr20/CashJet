'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
     const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const images = [
        { src: '/banner1.jpg', height: 1000, width: 1000 },
        { src: '/banner4.jpg', height: 1000, width: 1000 },
        { src: '/banner3.jpg', height: 1000, width: 1000 },
        { src: '/banner4.jpg', height: 1000, width: 1000 },
    ];
    return (
        <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={(s, time, progress) => { }}
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image src={image.src} height={image.height} width={image.width} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
