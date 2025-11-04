import React from 'react';

import CircleDecor from '../../assets/elements/8.png';
import CircleBlue from '../../assets/elements/4.png';
import CircleOrange from '../../assets/elements/3.png';
import CircleDonut from '../../assets/elements/5.png';

import image from '../../assets/events/2.png';
import image2 from '../../assets/events/3.png';
import image3 from '../../assets/events/4.png';

const ActivitiesSection: React.FC = () => {
  return (
    <section className='relative w-full bg-[#fcf7f6] overflow-hidden'>
      {/* ===== Background left ===== */}
      <img
        src={CircleDecor}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none
          absolute -left-[16rem]
          w-[24rem] opacity-90 rotate-300
        '
      />
      <img
        src={CircleBlue}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none absolute right-[20rem] md:top-[4rem] w-[4rem] hidden lg:block
        '
      />

      <img
        src={CircleOrange}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none absolute right-20 md:top-[7rem] w-[8rem] hidden lg:block
        '
      />

      <img
        src={CircleDonut}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none absolute left-0 bottom-0 w-[6rem]
        '
      />

      {/* ===== Content ===== */}
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20'>
        {/* Title */}
        <h2 className='text-center text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight'>
          HOẠT ĐỘNG
        </h2>

        {/* 2 columns layout */}
        <div className='mt-10 grid grid-cols-3 md:grid-cols-12 gap-8 md:gap-12'>
          <div className='col-span-4'>
            <div className='flex flex-col'>
              <div className='rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={image}
                  alt='activity'
                  className='h-[12rem] w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed'>
                <p className='mt-4 text-[#FF854D] font-semibold'>
                  SEMINAR: #ready4AI
                </p>
                <p className='text-[#274593]'>
                  Sinh viên được khám phá case study triển khai AI thực tế, qua
                  đó hiểu cách AI vận hành và hỗ trợ công việc hằng ngày. Giúp
                  sinh viên hiểu rõ xu hướng nghề nghiệp trong 5 năm dưới tác
                  động AI.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='flex flex-col'>
              <div className='rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={image2}
                  alt='activity'
                  className='h-[12rem] w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed'>
                <p className='mt-4 text-[#FF854D] font-semibold'>
                  Trải nghiệm – Kết nối cộng đồng{' '}
                </p>
                <p className='text-[#274593]'>
                  Tham gia bài test độc quyền của Dev Plus theo khung Tư duy –
                  Kỹ năng – Công cụ, giúp sinh viên xác định năng lực hiện tại
                  và định hướng phát triển với AI.
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <div className='flex flex-col'>
              <div className='rounded-[14px] border-[4px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={image3}
                  alt='activity'
                  className='h-[12rem] w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed'>
                <p className='mt-4 text-[#FF854D] font-semibold'>
                  Trải Nghiệm Gian Hàng Doanh Nghiệp{' '}
                </p>
                <p className='text-[#274593]'>
                  Thông qua việc trực tiếp tham quan khu trưng bày, sinh viên đã
                  hiểu rõ hơn về cách thức ứng dụng công nghệ AI vào thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
