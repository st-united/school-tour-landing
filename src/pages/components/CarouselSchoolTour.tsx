import React from 'react';
import { Carousel } from 'antd';
import {
  event10,
  event11,
  event12,
  event13,
  event2,
  event27,
  event28,
  event29,
  event3,
  event30,
  event31,
  event4,
  event6,
  event7,
  event8,
  event9,
} from '../../assets/events_2025';

const CarouselSchoolTour = () => {
  const slides = [
    {
      key: 'slide1',
      images: [
        event2,
        event6,
        event7,
        event8,
        event9,
        event10,
        event11,
        event12,
      ],
    },
    {
      key: 'slide2',
      images: [
        event13,
        event27,
        event28,
        event29,
        event30,
        event31,
        event3,
        event4,
      ],
    },
  ];

  return (
    <div className='bg-[#fcf7f6] py-10'>
      <h2 className='text-[#ff6900] text-2xl sm:text-4xl lg:text-5xl font-bold text-center uppercase mb-6'>
        Hình ảnh school tour
      </h2>

      {/* fix slick slide height stretching */}
      <style>{`
        .ant-carousel .slick-slide > div { height: 100%; }
      `}</style>

      <Carousel autoplay dots className='w-full'>
        {slides.map((s) => (
          <div key={s.key}>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20'>
              {s.images.map((src, i) => (
                <figure
                  key={i}
                  className='
                    relative w-full overflow-hidden rounded-xl bg-white shadow-sm
                    /* CHIỀU CAO CỐ ĐỊNH => ảnh luôn đều nhau */
                    h-[168px] sm:h-[200px] md:h-[220px] lg:h-[220px]
                  '
                >
                  {/* Ảnh fill & cắt giữa cho đều */}
                  <img
                    src={src}
                    alt={`event-${i}`}
                    loading='lazy'
                    className='absolute inset-0 block w-full h-full object-cover object-center'
                  />
                </figure>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSchoolTour;
