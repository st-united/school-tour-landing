import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
import PymaridIC from '../../assets/pymarid.png';

import CircleTwoAround from '../../assets/elements/2.png';
import CircleDesign from '../../assets/elements/8.png';

import Dev10 from '../../assets/hinh10.jpg'; // ảnh lớn (phải dưới)
import Logo from '../../assets/elements/10.png';
import { event1, event2, event24 } from '../../assets/events_2025';

const achievementsTopRight = [
  { count: 26, label: 'Chương trình đào tạo đã hoàn thành' },
  { count: 80, label: 'Dự án thực chiến đã triển khai' },
  { count: 120, label: 'Buổi seminar & workshop đã tổ chức' },
  {
    count: 380,
    label: 'Học viên DevPlus đã tốt nghiệp và',
    suffix: '#readytowork',
  },
  { count: 5000, label: 'Sinh viên đã tham gia các chương trình School Tour' },
];

// ==== COUNTER ====
type CounterProps = { end: number; duration?: number; className?: string };
const Counter: React.FC<CounterProps> = ({
  end,
  duration = 1600,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !played) {
          let cur = 0;
          const step = () => {
            cur += end / (duration / 16);
            if (cur < end) {
              setCount(Math.floor(cur));
              requestAnimationFrame(step);
            } else {
              setCount(end);
              setPlayed(true);
            }
          };
          step();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end, duration, played]);

  const fmt = (n: number) => n.toLocaleString('vi-VN');
  return (
    <span ref={ref} className={className}>
      {fmt(count)}
    </span>
  );
};

const Ready4AIFrame: React.FC = () => {
  return (
    <section className='relative w-full bg-[#fcf7f6] overflow-hidden min-h-[50rem]'>
      <img
        src={CircleDesign}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute -right-[16rem] -bottom-[10rem]  w-[25rem] md:w-[40rem] rotate-90'
      />
      <img
        src={CircleTwoAround}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute -left-[16rem] bottom-[50rem] md:bottom-[20rem] w-[25rem] md:w-[40rem]'
      />

      <div className='pointer-events-none select-none absolute -right-[4rem] bottom-[45rem] w-70 h-70 rounded-full bg-[#F7F2F1] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15),0_-20px_60px_rgba(0,0,0,0.05)]' />
      {/* ===== Content ===== */}
      <div className='relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-30'>
        {/* Title */}
        <div className='flex flex-col items-start lg:items-end'>
          <div className='text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight items-start'>
            KHUNG NĂNG LỰC
            <p className='text-[#fe7743] font-light'>#ready4AI</p>
          </div>
        </div>
        {/* 2 columns layout */}
        <div className='mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
          <div className='col-span-12 sm:col-span-7 text-sm sm:text-base md:text-lg leading-relaxed flex justify-center items-center'>
            <Image
              src={PymaridIC}
              alt='Ready4AI'
              preview={false}
              className='w-full max-w-sm sm:min-w-xs md:min-w-sm lg:min-w-lg'
            />
          </div>
          <div className='col-span-12 sm:col-span-5 text-[#274593]  text-sm sm:text-base md:text-lg leading-relaxed'>
            Khung năng lực Ready for AI của DevPlus được xác lập dựa trên yêu
            cầu thực tế từ doanh nghiệp và được Sở Khoa học & Công nghệ ghi nhận
            như một tiêu chuẩn định hướng đào tạo nguồn lực AI.
          </div>
        </div>
      </div>
      <section className='relative w-full overflow-hidden my-20'>
        <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-14 sm:py-18 md:py-22'>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center'>
            <div className='col-span-12 lg:col-span-6 text-sm sm:text-base md:text-lg leading-relaxed'>
              <h2 className='text-start text-[#274593] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight mb-10'>
                THÀNH TỰU NỔI BẬT
              </h2>
              <div className='flex flex-col items-start gap-6'>
                {achievementsTopRight.map((it, idx) => (
                  <div key={idx} className='text-left'>
                    <div className='text-[#FF7A45] text-2xl md:text-3xl font-extrabold leading-none'>
                      <Counter end={it.count} />+
                    </div>
                    <p className='text-base md:text-lg font-light leading-snug text-[#283d90]'>
                      {it.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-span-12 lg:col-span-6 flex gap-4 justify-center'>
              <div className='flex flex-col items-center gap-6'>
                <div className='h-18 w-18 ml-10'>
                  <Image
                    src={Logo}
                    alt='Logo'
                    preview={false}
                    className='object-cover'
                  />
                </div>
                <div className='flex flex-col items-end gap-4 md:gap-5'>
                  <div className='rounded-[14px] border-[3px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] h-[10rem] w-[10rem]'>
                    <img
                      src={event1}
                      className='h-full w-full rounded-[10px] object-cover'
                    />
                  </div>
                  <div className='rounded-[14px] border-[3px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] h-[14rem] w-[14rem]'>
                    <img
                      src={event24}
                      className='h-full w-full rounded-[10px] object-cover'
                    />
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-4 md:gap-5'>
                <div className='rounded-[14px] border-[3px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] h-[12rem] w-[12rem]'>
                  <img
                    src={event2}
                    className='h-full w-full rounded-[10px] object-cover'
                  />
                </div>
                <div className='rounded-[14px] border-[3px] border-[#fe7743] p-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.06)] h-[18rem] w-[17rem]'>
                  <img
                    src={Dev10}
                    className='h-full w-full rounded-[10px] object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Ready4AIFrame;
