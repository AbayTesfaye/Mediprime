import logo from "./assets/mediprime-logo.png"
import {motion} from "framer-motion"
const Navbar = () => {

  return (
    <motion.nav
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.44, 0, 0, 1],
      },
    }}
    viewport={{ amount: "all", once: true }}
     className="fixed left-0 right-0 top-[19px] z-50 mx-[24px] flex h-[65px] items-center justify-between rounded-[32px] bg-white/10 px-6 shadow-[0_57px_96px_-8px_rgba(87,92,95,0.25)] outline outline-4 -outline-offset-[4px] outline-white/[38%] backdrop-blur-[4px] md:mx-[40px] md:h-[80px] md:px-8 xl:mx0[95px] 3xl:mx-auto 3xl:max-w-[1250px]">
      <div className="flex items-center justify-center gap-10">
        <a href="">
          <img src={logo} alt="" className="w-[120px] cursor-pointer md:w-[142px]" />
        </a>
        <div className="items-center justify-center gap-[20px] text:base font-semibold leading-[24px] text-[#445568] md:flex md:gap-[32px] xl:text-[18px] ">
           <a href="/#hero" className="cursor-pointer transition-all hover:text-[#445568]/50">
            Home
          </a>
          <a href="/#features" className="cursor-pointer transition-all hover:text-[#445568]/50">
            Who we are
          </a>
          <a href="/#first-cta" className="cursor-pointer transition-all hover:text-[#445568]/50">
            Payments
          </a>
            <a href="/#services" className="cursor-pointer transition-all hover:text-[#445568]/50">
            Services
          </a>
          
        </div>
      </div>
      <a href="/#get-app">
      <button className=" btn-shadow flex relative h-[38px] w-[110px] items-center justify-center rounded-full  bg-violet-900 group overflow-hidden text-base font-medium leading-[24px] outline outline-4 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:outline-offset-1 hover:outline-white/[100%]  text-white md:h-[48px] md:w-[202px] md:text-[18px] xl:w-[154px]">
            <div className="absolute -left-1 -bottom-[2px] right-0 !mx-auto z-10 h-[0px] w-[160px] bg-white rounded-full group-hover:h-[52px] transition-all duration-300" />
            <span className="group-hover:text-black z-[11] uppercase text-[14px] ">Book Now</span>
      </button>
      </a>
     
    </motion.nav>
  );
};

export default Navbar;
