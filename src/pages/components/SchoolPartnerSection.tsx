import React from 'react';
import CircleBase from '../../assets/elements/6.png';
import CircleOrange from '../../assets/elements/3.png';
import CircleDonut from '../../assets/elements/5.png';

import Company1CMCGlobal from '../../assets/company/1.cmc-global.png';
import Company2Mor from '../../assets/company/2.Mor.png';
import Company3NapaGlobal from '../../assets/company/3.Napaglobal.png';
import Company4LogoRIKAI from '../../assets/company/4.logoRIKAI.png';
import Company5EnouvoLogo from '../../assets/company/5.enouvologo.png';
import Company6LogoRikkei from '../../assets/company/6.Logo-Rikkei.png';
import Company7Tomosia from '../../assets/company/7.tomosia.png';
import Company8Paracel from '../../assets/company/8.Paracel.png';
import Company9MadisonTechnologies from '../../assets/company/9.madison-technologies.png';
import Company10MOZIASOFT from '../../assets/company/10.MOZIASOFT.png';
import Company11Techchain from '../../assets/company/11.techchain.png';
import Company12Avoca from '../../assets/company/12.Avoca.png';
import Company13EnableStartup from '../../assets/company/13.Enable-Startup.png';
import Company14LOGOPSCd from '../../assets/company/14.PSCD.png';
import Company15EMAI from '../../assets/company/15.EM&AI.png';
import Company16Mrp from '../../assets/company/16.mrp.png';
import Company17Heatmob from '../../assets/company/17.heatmob.png';
import Company18EvvoLabs from '../../assets/company/18.EvvoLabs.png';
import Company19Amit from '../../assets/company/19.AMIT.png';
import Company20Spereax from '../../assets/company/20.spereax.png';
import Company21Edtronaut from '../../assets/company/21.logoedtronaut.png';
import Company22Aiaivn from '../../assets/company/22.AIAIVN.png';
import Company23Antie from '../../assets/company/23.antie.png';
import Company24Chatfly from '../../assets/company/24.chatfly.png';

const CompanyCard = ({ org }: { org: { name: string; image: string } }) => {
  return (
    <div
      className='rounded-[14px] border-[4px] border-[#fe7743]
     p-2 shadow-[0_6px_18px_rgba(0,0,0,0.06)] w-full h-[5rem] flex justify-center'
    >
      <img
        src={org.image}
        alt={org.name}
        className='h-[3.5rem] rounded-[10px] object-contain'
      />
    </div>
  );
};

type Logo = { name: string; src: string };

const NETWORK_1: Logo[] = [
  { name: 'CMC Global', src: Company1CMCGlobal },
  { name: 'MOR', src: Company2Mor },
  { name: 'Napa Global', src: Company3NapaGlobal },
  { name: 'RIKAI', src: Company4LogoRIKAI },
  { name: 'Enouvo', src: Company5EnouvoLogo },
  { name: 'Rikkei', src: Company6LogoRikkei },
  { name: 'Tomosia', src: Company7Tomosia },
  { name: 'Paracel', src: Company8Paracel },
  { name: 'Madison Technologies', src: Company9MadisonTechnologies },
  { name: 'MOZIASOFT', src: Company10MOZIASOFT },
  { name: 'Techchain', src: Company11Techchain },
  { name: 'Avoca', src: Company12Avoca },
];

const NETWORK_2: Logo[] = [
  { name: 'Enable Startup', src: Company13EnableStartup },
  { name: 'PSCD', src: Company14LOGOPSCd },
  { name: 'EM&AI', src: Company15EMAI },
  { name: 'MRP', src: Company16Mrp },
  { name: 'Heatmob', src: Company17Heatmob },
  { name: 'EvvoLabs', src: Company18EvvoLabs },
  { name: 'AMIT', src: Company19Amit },
  { name: 'SPEREAX', src: Company20Spereax },
  { name: 'Edtronaut', src: Company21Edtronaut },
  { name: 'AIAI VN', src: Company22Aiaivn },
  { name: 'ANTIE', src: Company23Antie },
  { name: 'Chatfly', src: Company24Chatfly },
];

const TitleBlock = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className='text-center'>
    <h2 className='text-[#274593] text-3xl sm:text-4xl md:text-[3rem] font-extrabold tracking-tight'>
      {title}
    </h2>
    <p className='mt-2 text-[#fe7743] text-md sm:text-xl'>{subtitle}</p>
  </div>
);

const SectionLabel = ({ text }: { text: string }) => (
  <p className='mt-10 mb-6 text-md sm:text-2xl text-center text-[#fe7743] font-semibold'>
    {text}
  </p>
);

const Card4Grid = ({ items }: { items: Logo[] }) => (
  <div className='grid grid-cols-4 gap-8'>
    {items.map((it) => (
      <CompanyCard key={it.name} org={{ name: it.name, image: it.src ?? '' }} />
    ))}
  </div>
);

const SchoolPartnerSection: React.FC = () => {
  return (
    <section
      id='partners'
      className='relative w-full bg-[#fcf7f6] overflow-hidden'
    >
      {/* decor */}
      <img
        src={CircleDonut}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute left-16 top-0 w-[3rem] sm:w-[8rem] md:w-[10rem]'
      />
      <img
        src={CircleBase}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute -left-[12rem] bottom-[22rem] w-[20rem] opacity-90'
      />
      <img
        src={CircleOrange}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute -right-12 sm:right-20 top-[8rem] md:top-[20rem] w-[9rem] rounded-full inset-shadow-xl'
      />

      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20'>
        {/* Block 1 */}
        <TitleBlock
          title='Đối tác thực tập'
          subtitle='Dev Plus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ hội thực tập và đầu ra việc làm cho sinh viên.'
        />

        {/* Block 2 */}
        <div className='mt-24'>
          <SectionLabel text='Mạng lưới doanh nghiệp' />
          <Card4Grid items={NETWORK_1} />
        </div>

        {/* Block 3 */}
        <div className='mt-24'>
          <TitleBlock
            title='Đối tác thực tập'
            subtitle='Dev Plus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ hội thực tập và đầu ra việc làm cho sinh viên.'
          />
          <SectionLabel text='Mạng lưới doanh nghiệp' />
          <Card4Grid items={NETWORK_2} />
        </div>
      </div>
    </section>
  );
};

export default SchoolPartnerSection;
