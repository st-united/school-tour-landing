import ThanhNhanImg from '../../assets/speakers/ThanhNhan.png';
import QuocThaoImg from '../../assets/speakers/QuocThao.png';
import STEPHENWARRENImg from '../../assets/speakers/STEPHENWARREN.png';
import SourmackDarbouyImg from '../../assets/speakers/SourmackDarbouy.png';
import CircleDesign from '../../assets/elements/8.png';
import qr1 from '../../assets/qr/aicp.png';
import qr2 from '../../assets/qr/ats.png';
import qr3 from '../../assets/qr/join.png';
import {
  BuiXuanThienImg,
  DangNgocHuyImg,
  DangThaiHaiImg,
  DuongTranImg,
  EmilyImg,
  HoangPhamImg,
  HoMinhThiImg,
  KimDaeHwanImg,
  KimKwangHweeImg,
  NguyenSonTungImg,
  NuNguyenImg,
  RyanThanhNguyenImg,
  TaiNguyenImg,
  TranKimVinhImg,
  TranTrongMinhImg,
  TranXuanVuImg,
} from '../../assets/speakers_2025';

const speakers = [
  {
    name: 'Mr. Ryan Thanh Nguyen',
    position: ['Product Owner @ NAB Bank, Founder Circle Academy'],
    image: RyanThanhNguyenImg,
    description: 'Description of speaker',
  },
  { name: 'Mr. Thanh Nhan', position: ['CEO Antee'], image: ThanhNhanImg },
  { name: 'Mr. Hoang Pham', position: ['CEO Dev Plus'], image: HoangPhamImg },
  {
    name: 'Emily',
    position: ['Founder và CEO DigiSource và ZA Office'],
    image: EmilyImg,
  },
  { name: 'Mr. Quoc Thao', position: ['CEO AMIT'], image: QuocThaoImg },
  {
    name: 'Kim Dae Hwan',
    position: ['CEO of Global K-Startup Silicon Valley, CEO of Timely Kr'],
    image: KimDaeHwanImg,
  },
  {
    name: 'Dang Thai Hai',
    position: ['President  Reasonary AI'],
    image: DangThaiHaiImg,
  },
  {
    name: 'Tai Nguyen',
    position: ['Founder tại Naiscorp Robotics'],
    image: TaiNguyenImg,
  },
  {
    name: 'Duong Tran',
    position: ['Head of Engineering Alpha Bits CTO Co-founder at SENCAR'],
    image: DuongTranImg,
  },
  {
    name: 'Nu Nguyen',
    position: ['Business Manager at Evvo Labs'],
    image: NuNguyenImg,
  },
  {
    name: 'Mr. Stephen Warren',
    position: ['Senior Project Manager Company X'],
    image: STEPHENWARRENImg,
  },
  {
    name: 'Mr. Sourmack Darbouy',
    position: ['Sales Director, APAC at Atility & Abeeway'],
    image: SourmackDarbouyImg,
  },
  {
    name: 'Kim Kwang Hwee',
    position: ['General Director of SPHERE AX Vietnam'],
    image: KimKwangHweeImg,
  },
  {
    name: 'Dang Ngoc Huy',
    position: ['Marketing Manager - VR360'],
    image: DangNgocHuyImg,
  },
  {
    name: 'Tran Xuan Vu',
    position: ['Head of Business Development at Enosta'],
    image: TranXuanVuImg,
  },
  {
    name: 'Tran Trong Minh',
    position: ['CEO IA Lab'],
    image: TranTrongMinhImg,
  },
  {
    name: 'Nguyen Son Tung',
    position: ['CEO - DX TECH JSC - AI Service Company'],
    image: NguyenSonTungImg,
  },
  {
    name: 'Ho Minh Thi',
    position: ['CEO EM&AI'],
    image: HoMinhThiImg,
  },
  {
    name: 'Tran Kim Vinh',
    position: ['Tech Operation & Delivery Management Trainer & Consultant'],
    image: TranKimVinhImg,
  },
  {
    name: 'Bui Xuan Thien',
    position: ['Full Stack Developer ST United'],
    image: BuiXuanThienImg,
  },
];

type SpeakerCardProps = {
  photo: string;
  name: string;
  roleLine1?: string;
  roleLine2?: string;
  className?: string;
  accent?: string; // hex hoặc tailwind color
};

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  photo,
  name,
  roleLine1,
  roleLine2,
  accent = '#FF7A45',
  className = '',
}) => {
  const roleText = [roleLine1, roleLine2].filter(Boolean).join(', ');

  return (
    <div className={`relative w-[245px] ${className}`}>
      {/* 1) BG tím bo góc: lớp dưới cùng */}
      <div className='absolute inset-0 h-[207px] bg-[#D9D8E5] rounded-tr-[120px] top-8 z-0' />

      {/* 2) LỚP MASK ở trên: cắt ảnh theo bo góc, ảnh nằm TRÊN bg */}
      <div className='relative h-[245px] rounded-tr-[120px] overflow-hidden z-10'>
        <img
          src={photo}
          alt={name}
          className='absolute inset-0 w-full h-full object-cover'
          loading='lazy'
        />

        {/* overlay + tên */}
        <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent' />
        <div className='absolute bottom-3 left-4 right-4 text-white font-semibold leading-tight'>
          {name}
        </div>
      </div>

      {/* 3) Dải cam chức danh */}
      <div
        className='inline-block w-full h-12 mt-2 px-3 py-2 text-white text-[12px] leading-snug'
        style={{ backgroundColor: accent }}
      >
        {roleText}
      </div>
    </div>
  );
};

const SpeakerSection = () => {
  return (
    <section className='relative w-full bg-[#fcf7f6] overflow-hidden min-h-[50rem]'>
      <div className='hidden md:block pointer-events-none select-none  absolute top-10 -left-[10rem] w-100 h-100 rounded-full bg-[#F7F2F1] border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15),0_-20px_60px_rgba(0,0,0,0.05)]' />
      <img
        src={CircleDesign}
        alt=''
        aria-hidden
        className='pointer-events-none select-none absolute -right-[26rem] top-4 w-[25rem] md:w-[40rem] rotate-90'
      />
      <div className='relation px-4 sm:px-6 lg:px-16 py-8 sm:py-12'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-[#ff6900] text-2xl sm:text-4xl lg:text-5xl font-bold text-center uppercase mb-[8rem]'>
            Chuyên gia đồng hành
          </h2>

          {/* GRID responsive */}
          <div className='grid lg:grid-cols-4 gap-x-10 md:gap-x-6 gap-y-30 justify-items-center'>
            {speakers.map((sp, i) => (
              <SpeakerCard
                key={i}
                photo={sp.image}
                name={sp.name}
                roleLine1={sp.position[0]}
                roleLine2={sp.position[1]}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20'>
        <h2 className='text-center text-[#FF854D] text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight'>
          SCAN FOR MORE
        </h2>

        {/* 2 columns layout */}
        <div className='mt-10 grid grid-cols-3 md:grid-cols-12 gap-8 md:gap-12'>
          <div className='col-span-4 flex justify-center'>
            <div className='flex flex-col text-center'>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed '>
                <p className='mt-4 text-[#FF854D] font-bold'>
                  CHẤM KHUNG
                  <br />
                  NĂNG LỰC
                </p>
              </div>
              <div className='w-fit rounded-[14px] border-[14px] border-[#fe7743] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={qr1}
                  alt='activity'
                  className='h-[12rem] md:h-auto w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
            </div>
          </div>
          <div className='col-span-4 flex justify-center'>
            <div className='flex flex-col text-center'>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed'>
                <p className='mt-4 text-[#FF854D] font-bold'>
                  CHẤM ĐIỂM CV CHUẨN
                  <br />
                  ATS BẰNG AI
                </p>
              </div>
              <div className='w-fit rounded-[14px] border-[14px] border-[#fe7743] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={qr2}
                  alt='activity'
                  className='h-[12rem] md:h-auto w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
            </div>
          </div>
          <div className='col-span-4 flex justify-center'>
            <div className='flex flex-col text-center'>
              <div className='text-sm sm:text-base md:text-lg leading-relaxed'>
                <p className='mt-4 text-[#FF854D] font-bold'>
                  Join cộng đồng
                  <br />
                  #ready4AI
                </p>
              </div>
              <div className='w-fit rounded-[14px] border-[14px] border-[#fe7743] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.06)]'>
                <img
                  src={qr3}
                  alt='activity'
                  className='h-[12rem] md:h-auto w-full max-w-[30rem] rounded-[10px] object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
