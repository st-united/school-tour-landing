import React from 'react';
import {
  P2,
  P29,
  P3,
  P32,
  P33,
  P4,
  P45,
  P5,
  P56,
  P6,
  P61,
  P62,
  P63,
  P7,
  P8,
  P65,
  P66,
  P67,
} from '../../assets/partners_2025';

/**
 * School Tour Schedule grid (JUL → DEC) inspired by the provided mock.
 * - Fully responsive.
 * - Uses TailwindCSS only (no external UI libs).
 * - Data-driven: pass logos (src/alt/href) per month.
 * - Empty slots render as pale placeholders like the mock.
 *
 * Usage example is at the bottom of this file (SamplePreview component).
 */

export type SchoolLogo = {
  src?: string; // image url (optional). If omitted, we'll render a text badge
  alt: string;
  href?: string; // optional click-through
  textFallback?: string; // short text to show if src is missing
};

export type MonthColumn = {
  key: 'JUL' | 'AUG' | 'SEP' | 'OCT' | 'NOV' | 'DEC';
  label?: string; // if omitted we derive from key
  items: SchoolLogo[]; // logos from top to bottom
};

export type SchoolTourScheduleProps = {
  title?: string; // default: 'LỊCH SCHOOL TOUR'
  hashtag?: string; // default: '#ready4AI'
  year?: number; // default: current year
  months: MonthColumn[]; // 6 months
  maxRows?: number; // how many rows per column. default 6
};

const MONTH_LABEL: Record<MonthColumn['key'], string> = {
  JUL: 'JUL',
  AUG: 'AUG',
  SEP: 'SEP',
  OCT: 'OCT',
  NOV: 'NOV',
  DEC: 'DEC',
};

const PeachHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='mx-auto mb-3 w-20 sm:w-24 rounded-2xl bg-[#FFD3C6] text-[#263A91] font-extrabold tracking-wide text-center py-2 shadow-sm'>
    {children}
  </div>
);

const PlaceholderBox: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className='h-20  rounded-md bg-[#EDF2FB] flex items-center justify-center text-xs font-medium text-slate-500 select-none'>
    {children}
  </div>
);

const LogoCell: React.FC<{ logo?: SchoolLogo }> = ({ logo }) => {
  if (!logo) return <PlaceholderBox />;
  const content = logo.src ? (
    <img
      src={logo.src}
      alt={logo.alt}
      className='h-20 w-auto object-contain mx-auto p-2'
      loading='lazy'
    />
  ) : (
    <span className='px-2 py-1 rounded bg-white text-slate-700 text-xs font-semibold shadow-sm h-20'>
      {logo.textFallback ?? logo.alt}
    </span>
  );
  return (
    <div className='h-20 rounded-md bg-[#EDF2FB] flex items-center justify-center overflow-hidden'>
      {logo.href ? (
        <a
          href={logo.href}
          target='_blank'
          rel='noreferrer'
          className='w-full h-full flex items-center justify-center'
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export const SchoolTourSchedule: React.FC<SchoolTourScheduleProps> = ({
  title = 'LỊCH SCHOOL TOUR',
  hashtag = '#ready4AI',
  year = new Date().getFullYear(),
  months,
  maxRows = 6,
}) => {
  // Ensure we always render 6 columns in JUL→DEC order
  const order: MonthColumn['key'][] = [
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const byKey: Record<string, MonthColumn | undefined> = Object.fromEntries(
    months.map((m) => [m.key, m])
  );

  return (
    <div className='relative w-full overflow-hidden bg-[#fcf7f6] rounded-3xl p-4 sm:p-6'>
      {/* Heading */}
      <div className='text-center mb-6 '>
        <div className='text-2xl sm:text-3xl font-extrabold tracking-wide text-[#FF6D48]'>
          {title} <span className='text-[#FF6D48]'>{hashtag}</span>
        </div>
        <div className='text-3xl sm:text-4xl font-extrabold text-[#FF6D48]'>
          {year}
        </div>
      </div>

      {/* Grid: horizontal scroll on small screens */}
      <div className='overflow-x-auto px-14'>
        <div className='grid md:grid-cols-6 gap-4 px-1'>
          {order.map((k) => {
            const col = byKey[k];
            const items = col?.items ?? [];
            const label = col?.label ?? MONTH_LABEL[k];
            return (
              <div key={k} className='flex flex-col'>
                <PeachHeader>{label}</PeachHeader>
                <div
                  className={`grid gap-3`}
                  style={{
                    gridTemplateRows: `repeat(${maxRows}, minmax(3.5rem, 1fr))`,
                  }}
                >
                  {Array.from({ length: maxRows }).map((_, idx) => (
                    <LogoCell key={idx} logo={items[idx]} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ========================= SAMPLE PREVIEW ========================= */
export default function SamplePreview() {
  const months: MonthColumn[] = [
    {
      key: 'JUL',
      items: [
        {
          src: P63,
          alt: 'VTC Academy',
          href: 'https://vtc.edu.vn',
        },
      ],
    },
    {
      key: 'AUG',
      items: [
        {
          src: P2,
          alt: 'FPT Polytechnic',
          href: 'https://caodang.fpt.edu.vn',
        },
        {
          src: P3,
          alt: 'BTEC FPT',
          href: 'https://btec.edu.vn',
        },
      ],
    },
    {
      key: 'SEP',
      items: [
        { src: P5, alt: 'VKU' },
        { src: P6, alt: 'VNUK' },
        { src: P4, alt: 'DUE' },
        { src: P7, alt: 'Đại học Đông Á' },
      ],
    },
    {
      key: 'OCT',
      items: [
        { src: P8, alt: 'SPKT' },
        { src: P62, alt: 'Bách Khoa ĐN' },
        { src: P61, alt: 'UEL' },
        { src: P45, alt: 'UMT' },
        { src: P56, alt: 'DHV' },
      ],
    },
    {
      key: 'NOV',
      items: [
        { src: P65, alt: 'IU HCM' },
        { src: P66, alt: 'VLSC' },
        { src: P67, alt: 'SGU' },
      ],
    },
    {
      key: 'DEC',
      items: [
        { src: P29, alt: 'UEH' },
        { src: P32, alt: 'BK HCM' },
        {
          src: P2,
          alt: 'FPT Polytechnic',
          href: 'https://caodang.fpt.edu.vn',
        },
        { src: P33, alt: 'HBU' },
      ],
    },
  ];
  return (
    <SchoolTourSchedule
      title='LỊCH SCHOOL TOUR'
      hashtag='#ready4AI'
      year={2025}
      months={months}
      maxRows={5}
    />
  );
}
