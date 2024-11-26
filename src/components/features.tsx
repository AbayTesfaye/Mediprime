import arrow from "../assets/arrow.svg";
const Features = () => {
  return (
    <section
      id="features"
      className="flex w-full items-center justify-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px]"
    >
      <div className="flex w-full flex-col items-start justify-between gap-8 xl:flex-row xl:items-end 3xl:max-w-[1200px]">
        <div className="flex flex-col">
          {/* Sub label */}
          <p className="text-gradient text-sm font-bold leading-6 md:text-base uppercase">
            Who we are
          </p>

          {/* Heading */}
          <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px text-[#0e1829] md:text-[36px] md:leading-[44px]">
            The Great Place Of Eyecare Hospital Center
          </h3>

          {/* Description */}
          <p className="mt-5 w-full text-base font-medium leading-6 text-[#445469] md:w-[655px] md:leading-[30px] gap-3">
            we understand the importance of clear vision and comprehensive eye
            care. Our dedicated team of experienced optometrists and
            ophthalmologists is committed to prociding to-notch eye care
            servieces tailored to you individual needs
          </p>
        </div>
        <button className="flex relative h-[56px] w-[180px] items-center justify-center rounded-full border-2 border-[#131316] group overflow-hidden text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
          <div className="absolute -left-1 bottom-0 right-0 !mx-auto -z-10 h-[0px] w-[207px] bg-black rounded-full group-hover:h-[59px] transition-all duration-300" />

          {/* Flex container to allow gap between text and image */}
          <div className="flex items-center gap-2">
            <span className="group-hover:text-white">Book Now</span>
            <img src={arrow} alt="arrow" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Features;
