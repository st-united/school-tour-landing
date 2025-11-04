import React from 'react';

import CircleDecor from '../../assets/elements/8.png';
import DevPlusLogo from '../../assets/devplus.png';

/** Section */
const SchoolTourDescription: React.FC = () => {
  return (
    <section className='relative w-full bg-[#FBFAFF] overflow-hidden sm:min-h-[44rem]'>
      <img
        src={CircleDecor}
        alt=''
        aria-hidden
        className='
          pointer-events-none select-none
          absolute -left-[10rem] -top-[20rem]
          w-[40rem] opacity-90
        '
      />

      <div
        aria-hidden
        className='
          pointer-events-none select-none
          absolute -bottom-24 -left-10
          h-56 w-56 rounded-full
          bg-white shadow-[0_12px_60px_rgba(0,0,0,0.07)]
          ring-1 ring-white/80
        '
      />

      {/* ===== Content container ===== */}
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16'>
        <div className='flex justify-end'>
          <img
            src={DevPlusLogo}
            alt='DEV PLUS'
            className='h-10 sm:h-12 md:h-14 object-contain'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mt-4 md:mt-2'>
          <div className='hidden md:block md:col-span-5' />

          <div className='md:col-span-7'>
            <h2 className='text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight'>
              SCHOOL TOUR 2025
            </h2>
            <div className='mt-2 h-[3px] w-24 bg-[#FF854D] rounded-full' />

            {/* Body */}
            <div className='mt-5 space-y-4 text-[#FF854D]'>
              <p className='text-sm sm:text-base leading-relaxed'>
                Phát huy thành công từ các mùa trước, #Ready4AI School Tour 2025
                không chỉ là một buổi nói chuyện – mà là trải nghiệm đáng nhớ và
                tác động sâu sắc đến sinh viên trong kỷ nguyên AI. Chương trình
                được thiết kế xoay quanh vai trò chủ động của người học: sinh
                viên sẽ trực tiếp tham gia Challenge Day – hoạt động thực hành
                giúp rèn luyện tư duy phản biện, năng lực cộng tác và hành động
                linh hoạt ngay tại sự kiện.
              </p>
              <p className='text-sm sm:text-base leading-relaxed'>
                Song song đó là phần chia sẻ từ các diễn giả “người thật – việc
                thật”: những cá nhân đang tiên phong ứng dụng Khung năng lực mới
                để chuyển mình thành công trong công việc và doanh nghiệp.
              </p>
              <p className='text-sm sm:text-base leading-relaxed'>
                Đây là nơi sinh viên không chỉ được truyền cảm hứng – mà còn bắt
                đầu vẽ nên lộ trình sự nghiệp của riêng mình trong thời đại AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolTourDescription;
