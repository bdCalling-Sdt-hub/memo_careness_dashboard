import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const data = [
  { icon: '€', title: 'Total sales', value: '£33,873', change: '↑ 8% vs last month' },
  { icon: '€', title: 'Profit on sales', value: '£13,873', change: '↑ 8% vs last month' },
  { icon: '🎁', title: 'Total services', value: '360 services', change: '↑ 8% vs last month' },
  { icon: '📦', title: 'Total products', value: '120 products', change: '↑ 8% vs last month' },
  { icon: '📊', title: 'Total revenue', value: '£45,000', change: '↑ 5% vs last month' },
  { icon: '📈', title: 'New clients', value: '50', change: '↑ 12% vs last month' },
];

const Carousel = () => {
  return (
    <div className="w-full px-6 mt-10 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center p-6 bg-white rounded-lg  ">
              <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
              <small className="text-green-500">{item.change}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
