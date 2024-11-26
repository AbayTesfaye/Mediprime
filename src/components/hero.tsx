import herobg from "../assets/hero-bg.webp"
import heroImg from "../assets/hero_img.webp"
import arrow from '../assets/arrow.svg'

const Hero = () => {
  return (
    <section 
    id="hero"
    style={{ backgroundImage: `url(${herobg})`}}
    className = "relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[237px] xl:pt-[159px] 3xl:justify-center"
    >
      {/* Hero left content section */}
      <div className="z-10 flex w-full flex-col items-center text-[#0e0e0e] lg:items-start 3xl:max-w-[120px]" >
      <h1 className="h-auto w-full text-center text-[60px] font-semibold leading-[60px] opacity-[0.8704] md:h-[160px]md:w-[749px] md:text-[80px] lg:text-left">
        Your Partner in Health & Wellness
        </h1>
      <p className="mt-[25.5px] w-ful text-center text-base font-medium leading-6 md:w-[523px] md:text-[20px] md:leading-[30px] lg:text-left">
        We are committed to providing you with the best medical and healthcare services to help you live healthier and happier
      </p>
      <div>
        <button>
          <span>How we work</span>
        </button>
        <button>
          <span>Learn More</span>
          <img src={arrow} alt="arrow image" />
        </button>
      </div>
      </div>
    </section>
  );
};

export default Hero;
