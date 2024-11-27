import dotBg from "../assets/dot-bg.svg";
import ctaGradient from "../assets/cta-gradient.svg";
import arrow from "../assets/arrow.svg";
import checkmark from "../assets/checkmark.svg";
import women from "../assets/banner-women.png";
import { motion } from "framer-motion";

const SecondCTA = () => {
  return (
    <section
      id="get-app"
      className="relative w-full overflow-hidden px-6 py-10 md:px-10 md:py-[127px] xl:px-[159px]"
    >
      {/* Dot and Gradients */}
      <img src={dotBg} alt="" className="absolute top-0 -z-20 w-full" />
      <img
        src={ctaGradient}
        alt=""
        className="absolute right-0 top-0 -z-[12]"
      />
      {/* Dot and Gradients */}

      {/* Bottom Gradients */}
      <div className="absolute bottom-[-540px] -z-[9] h-[772px] w-full bg-[#fffeff] md:w-[785px]" />
      {/* Bottom Gradients */}

      <div className="z-10 w-full py-[31px] md:w-[576px] 3xl:mx-auto 3xl:w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "50%",
            once: true,
          }}
          className="text-4xl font-bold leading-tight tracking-[-0.96px] text-[#0E1829] md:w-[576px] md:text-[48px] md:leading-[60px]"
        >
          Seamless Transactions At Clinic's Payement Center
        </motion.h2>
        {/* List Items */}
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "50%",
            once: true,
          }}
          className="mt-8 max-w-md list-inside space-y-4 text-base font-medium leading-7 text-[#647187] md:text-[18px]"
        >
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            24*7 Emergency Services
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Cashless Payment
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Insurance Checklist Available
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Access to all features
          </li>
        </motion.ul>
        {/* List Items */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "50%",
            once: true,
          }}
          className="z-30 mt-12 flex gap-6 md:mt-[78px]"
        >
          <button className="flex relative h-[56px] w-[180px] items-center justify-center rounded-full border-2 border-[#131316] group overflow-hidden text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            <div className="absolute -left-1 bottom-0 right-0 !mx-auto -z-10 h-[0px] w-[207px] bg-violet-900 rounded-full group-hover:h-[59px] transition-all duration-300" />
            <span className="group-hover:text-white z-20">Book Now</span>
          </button>
          <button className="flex relative h-[56px] w-[180px] items-center justify-center group overflow-hidden text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px] hover:underline underline-offset-8">
            <span>Appointment</span>
            <img src={arrow} alt="arrow" />
          </button>
        </motion.div>
        {/* Buttons */}
      </div>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "50%",
          once: true,
        }}
        src={women}
        alt=""
        className="absolute bottom-0 left-[550px] z-10 mx-auto hidden w-[600px] md:block xl:left-[600px] xl:right-0"
      />
    </section>
  );
};

export default SecondCTA;
