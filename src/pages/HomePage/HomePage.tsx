import { Layout } from 'antd';
import { useEffect, useState } from 'react';

import HeaderDevplus from './HeaderDevplus';
import './homepage.css';

// ==== Sections / Components ====
import Ready4AIHero from '../components/Ready4AIHero';
import ActivitiesSection from '../components/ActivitiesSection';
import Ready4AIFrame from '../components/Ready4AIFrame';
import PartnersSection from '../components/PartnersSection';
import SpeakerSection from '../components/SpeakerSection';
import ClosingCTASection from '../components/ClosingCTASection';
import SamplePreview from '../components/SchoolTourSchedule';
import CarouselSchoolTour from '../components/CarouselSchoolTour';
import SchoolPartnerSection from '../components/SchoolPartnerSection';

// Danh sách section id để highlight menu
const sectionIds = [
  'introduction',
  'activities',
  'learning',
  'achievement',
  'network',
  'speakers',
] as const;

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries.filter((e) => e.isIntersecting);

        if (visibles.length > 0) {
          // lấy section gần đỉnh viewport nhất
          const topMost = visibles.reduce((best, cur) => {
            const bestTop = Math.abs(best.boundingClientRect.top);
            const curTop = Math.abs(cur.boundingClientRect.top);
            return curTop < bestTop ? cur : best;
          });
          const id = (topMost.target as HTMLElement).id;
          if (id && id !== activeSection) setActiveSection(id);
        } else {
          // nếu đang ở top => ép về introduction
          if (window.scrollY === 0) {
            setActiveSection('introduction');
          }
        }
      },
      {
        root: null,
        rootMargin: '-96px 0px -55% 0px', // trừ chiều cao header ~96px
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // set mặc định khi vừa load
    if (window.scrollY === 0) {
      setActiveSection('introduction');
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className='!z-99'>
        <HeaderDevplus activeSection={activeSection} />

        {/* Hero (Ready4AI + School Tour 2025 bên trong) */}
        <section id='introduction' className='scroll-mt-24 md:scroll-mt-28'>
          <Ready4AIHero />
        </section>

        <section id='activities' className='scroll-mt-24 md:scroll-mt-28'>
          <ActivitiesSection />
        </section>

        {/* <section id="learning" className="scroll-mt-24 md:scroll-mt-28">
          <Seminar />
        </section> */}

        {/* <section id='achievement' className='scroll-mt-24 md:scroll-mt-28'>
          <ExpoBoothExperience />
        </section> */}
        <Ready4AIFrame />

        <section id='network' className='scroll-mt-24 md:scroll-mt-28'>
          <PartnersSection />
        </section>

        <section id='speakers' className='scroll-mt-24 md:scroll-mt-28'>
          <SpeakerSection />
        </section>

        <SamplePreview />
        <CarouselSchoolTour />
        <SchoolPartnerSection />
        <ClosingCTASection />
      </div>
    </Layout>
  );
};

export default HomePage;
