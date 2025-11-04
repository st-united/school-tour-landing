import React from 'react';

import CircleBase from '../../assets/elements/2.png';
import CircleDecor from '../../assets/elements/8.png';
import LogoReady from '../../assets/elements/9.png';

import LogoDigiSource from '../../assets/11.png';
import LogoDPlus from '../../assets/devplus.png';
import LogoUni from '../../assets/skhcn1.png';
import image from '../../assets/events/1.png';
import roboboss from '../../assets/company/roboboss.png';
import minai from '../../assets/company/minai.png';

const Brand: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  <img
    src={src}
    alt={alt}
    className={`h-6 sm:h-10 md:h-12 object-contain mx-2 ${className || ''}`}
    loading='lazy'
  />
);

const Ready4AIHero: React.FC = () => {
  return (
    <section className='relative w-full bg-[#fcf7f6] overflow-hidden sm:min-h-min h-full'>
      <img
        src={CircleBase}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none
          absolute -left-[26rem] bottom-[24rem]
          w-[42rem] opacity-90
        '
      />
      <img
        src={CircleDecor}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none
          absolute -right-[24rem] bottom-24
          w-[40rem] rotate-145
        '
      />

      {/* ===== Content container ===== */}
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8'>
        {/* Top logos */}
        <div className='grid grid-cols-2 gap-4 pt-8 sm:pt-10 md:pt-12'>
          {/* Left block */}
          <div className='text-center'>
            <p className='text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#274593]'>
              ĐƠN VỊ TỔ CHỨC
            </p>
            <div className='mt-2 flex items-center justify-center'>
              <Brand src={LogoDPlus} alt='D+' />
              <Brand src={LogoDigiSource} alt='DigiSource' />
              <Brand src={LogoUni} alt='Danang' />
            </div>
          </div>

          {/* Middle block */}
          <div className='text-center'>
            <p className='text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#274593]'>
              ĐƠN VỊ ĐỒNG HÀNH
            </p>
            <div className='mt-2 flex items-center justify-center'>
              <Brand src={roboboss} alt='roboboss' />
              <Brand src={minai} alt='minai' />
            </div>
          </div>
        </div>

        {/* Headline & subheadline */}
        <div className='text-center mt-[8rem]'>
          <h2 className='font-extrabold leading-tight text-[1rem] sm:text-[2rem] md:text-[3rem] text-[#ff7b3e]'>
            10.000 sinh viên
          </h2>
          <p className='text-[#FF854D] text-base sm:text-lg md:text-3xl'>
            đã sẵn sàng bước vào thời đại AI
          </p>
        </div>
        {/* Center logo */}
        <div className='flex items-center justify-center'>
          <img
            src={LogoReady}
            alt='#ready4AI'
            className='w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] object-contain'
          />
        </div>

        {/* Divider & caption */}
        <div className='mx-auto mt-8 sm:mt-9 md:mt-10 max-w-lg my-20'>
          <p className='mt-3 text-center text-[#FF854D] text-xs sm:text-sm md:text-base font-bold'>
            Chương trình xác định và phát triển bộ khung năng lực thời đại
            <br />
            AI do Sở Khoa Học Công Nghệ Đà Nẵng chỉ đạo triển khai
          </p>
        </div>
      </div>
      {/* =========================
            SCHOOL TOUR 2025 (NEW)
           ========================= */}
      <section className='relative w-full px-10 overflow-hidden'>
        {/* ===== Content container ===== */}
        <div className='relative z-10 py-10 sm:py-14 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-10 mt-4 md:mt-2 items-center'>
            <div className='col-span-12 lg:col-span-7 md:justify-items-end'>
              <h2 className='text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight'>
                SCHOOL TOUR 2025
              </h2>
              <div className='mt-2 h-[3px] w-50 bg-[#FF854D] rounded-full' />

              {/* Body */}
              <div className='px-auto mt-5 space-y-4 text-[#FF854D] md:text-end'>
                <p className='text-sm sm:text-base leading-relaxed'>
                  Phát huy thành công từ các mùa trước, #Ready4AI School Tour
                  2025 không chỉ là một buổi nói chuyện – mà là trải nghiệm đáng
                  nhớ và tác động sâu sắc đến sinh viên trong kỷ nguyên AI.
                  Chương trình được thiết kế xoay quanh vai trò chủ động của
                  người học: sinh viên sẽ trực tiếp tham gia Challenge Day –
                  hoạt động thực hành giúp rèn luyện tư duy phản biện, năng lực
                  cộng tác và hành động linh hoạt ngay tại sự kiện.
                </p>
                <p className='text-sm sm:text-base leading-relaxed'>
                  Song song đó là phần chia sẻ từ các diễn giả “người thật –
                  việc thật”: những cá nhân đang tiên phong ứng dụng Khung năng
                  lực mới để chuyển mình thành công trong công việc và doanh
                  nghiệp.
                </p>
                <p className='text-sm sm:text-base leading-relaxed'>
                  Đây là nơi sinh viên không chỉ được truyền cảm hứng – mà còn
                  bắt đầu vẽ nên lộ trình sự nghiệp của riêng mình trong thời
                  đại AI.
                </p>
              </div>
            </div>
            <div className='col-span-12 lg:col-span-5 justify-items-center'>
              <div className='flex justify-center md:justify-start'>
                <div className='rounded-[14px] border-[3px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                  <img
                    src={image}
                    alt='Gian hàng doanh nghiệp'
                    className='h-auto w-full max-w-[30rem] rounded-[10px] object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= */}
    </section>
  );
};

export default Ready4AIHero;
