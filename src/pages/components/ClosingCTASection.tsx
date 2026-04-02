import React from "react";

import CircleDecor from "../../assets/elements/8.png"; // vòng tròn + orbit
import Ready4AILogo from "../../assets/elements/9.png"; // #ready4AI
import DevPlusLogo from "../../assets/devplus-name.png"; // DEVPLUS

type Props = {
  phone?: string;
  email?: string;
  website?: string;
};

const ClosingCTASection: React.FC<Props> = ({
  phone = "+84 905 182 013",
  email = "marketing@devplus.edu.vn",
  website = "devplus.edu.vn",
}) => {
  return (
    <section
      id="closing"
      className="relative w-full bg-[#fcf7f6] overflow-hidden min-h-[30rem] md:min-h-[44rem]"
    >
      {/* ====== Background decor ====== */}
      {/* Trái trên: vòng tròn lớn + orbit */}
      <img
        src={CircleDecor}
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -left-[30rem] md:-left-48 -top-[16rem] w-[40rem] opacity-95"
      />
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-20 -bottom-20 h-50 w-50 rounded-full bg-white ring-1 ring-white/80 shadow-[0_12px_90px_rgba(0,0,0,0.3)] "
      />

      <div
        aria-hidden
        className="pointer-events-none select-none absolute right-[38%] top-16 h-20 w-20 rounded-full bg-[#BFC6F7]"
      />
      {/* Tròn cam dưới-phải */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -right-12 bottom-[-2rem] h-40 w-40 rounded-full bg-[#FF854D]"
      />
      {/* Vệt tròn mờ ở góc trái dưới */}

      {/* ====== Content ====== */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Logo DEVPLUS góc phải */}
        <div className="flex justify-end">
          <img
            src={DevPlusLogo}
            alt="DEV PLUS"
            className="h-12 sm:h-22 md:h-30 object-contain"
          />
        </div>

        {/* Trung tâm: logo ready4AI + tagline */}
        <div className="mt-6 flex flex-col items-center text-center">
          <img
            src={Ready4AILogo}
            alt="#ready4AI"
            className="w-[14rem] sm:w-[24rem] md:w-[34rem] object-contain drop-shadow"
          />
          <p className="mt-2 text-[#FF854D] tracking-wide text-md md:text-xl">
            VỮNG BƯỚC TƯƠNG LAI CÙNG DEVPLUS
          </p>
        </div>

        {/* Khối liên hệ */}
        <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
          <div className="w-full max-w-md">
            <div className="h-[2px] bg-[#FF854D] w-50 mb-4" />
            <div className="space-y-2 text-[#FF854D]">
              <p className="text-sm sm:text-base">
                {phone.startsWith("+") ? phone : `+84 ${phone}`}
              </p>
              <p className="text-sm sm:text-base">
                <a
                  href={`mailto:${email}`}
                  className="hover:underline !text-[#FF854D]"
                >
                  {email}
                </a>
              </p>
              <p className="text-sm sm:text-base ">
                <a
                  href={`https://${website.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline !text-[#FF854D]"
                >
                  {website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTASection;
