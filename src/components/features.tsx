import arrow from "../assets/arrow.svg";
import security from "../assets/icon-1.png";
import health from "../assets/icon-2.png";
import care from "../assets/icon-3.png";
import doc from "../assets/icon-4.png";
import serve from "../assets/services-1.png";
import provide from "../assets/banner-11.png";
import banner from "../assets/banner_right.png";
import patient from "../assets/banner-six-2.png";
import {motion} from "framer-motion"
const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col w-full items-center justify-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px]"
    >
      <div className="flex w-full flex-col items-start justify-between gap-8 xl:flex-row xl:items-end 3xl:max-w-[1200px]">
        <div className="flex flex-col">
          {/* Sub label */}
          <motion.p
          initial ={{opacity:0, y:50}}
          whileInView ={{
            opacity:1,
            y:0,
            transition:{
              duration:0.8,
              ease: [0.44,0,0,1], 
            }
          }}
          viewport={{
            amount:"50%",
            once: true
          }}
           className="text-gradient text-sm font-bold leading-6 md:text-base uppercase">
            Who we are
          </motion.p>

          {/* Heading */}
          <motion.h3
          initial ={{opacity:0, y:50}}
          whileInView ={{
            opacity:1,
            y:0,
            transition:{
              duration:0.8,
              delay:0.2,
              ease: [0.44,0,0,1], 
            }
          }}
          viewport={{
            amount:"50%",
            once: true
          }}
           className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px text-[#0e1829] md:text-[36px] md:leading-[44px]">
            The Great Place Of Eyecare Hospital Center
          </motion.h3>

          {/* Description */}
          <motion.p
          initial ={{opacity:0, y:50}}
          whileInView ={{
            opacity:1,
            y:0,
            transition:{
              duration:0.8,
              delay:0.4,
              ease: [0.44,0,0,1], 
            }
          }}
          viewport={{
            amount:"50%",
            once: true
          }}
           className="mt-5 w-full text-base font-medium leading-6 text-[#445469] md:w-[655px] md:leading-[30px] gap-3">
            we understand the importance of clear vision and comprehensive eye
            care. Our dedicated team of experienced optometrists and
            ophthalmologists is committed to prociding to-notch eye care
            servieces tailored to you individual needs
          </motion.p>
        </div>
        <motion.button
        initial ={{opacity:0, y:50}}
        whileInView ={{
          opacity:1,
          y:0,
          transition:{
            duration:0.8,
            delay:0.4,
            ease: [0.44,0,0,1], 
          }
        }}
        viewport={{
          amount:"50%",
          once: true
        }}
         className="flex relative h-[56px] w-[180px] items-center justify-center rounded-full border-2 border-[#131316] group overflow-hidden text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
          <div className="absolute -left-1 bottom-0 right-0 !mx-auto -z-10 h-[0px] w-[207px] bg-black rounded-full group-hover:h-[59px] transition-all duration-300" />

          {/* Flex container to allow gap between text and image */}
          <div className="flex items-center gap-2">
            <span className="group-hover:text-white">Book Now</span>
            <img src={arrow} alt="arrow" />
          </div>
        </motion.button>
      </div>

      {/* First Row */}
      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-8 3xl:max-w-[1200px]">
        <motion.div
        initial ={{opacity:0, y:50}}
        whileInView ={{
          opacity:1,
          y:0,
          transition:{
            duration:0.8,
            delay:0.6,
            ease: [0.44,0,0,1], 
          }
        }}
        viewport={{
          amount:"50%",
          once: true
        }}
         className="card-gradient-one flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5e] lg:w-[486px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">Unique Approach To Your Health Needs</h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">Embrace the convenience of healthcare with our Telemedicine services at Mavis Clinic. Experience virtual consultations</p>
          </div>
          <img src={serve} alt="serve" className="w-[350px]" />
        </motion.div>

        <motion.div
        initial ={{opacity:0, y:50}}
        whileInView ={{
          opacity:1,
          y:0,
          transition:{
            duration:0.8,
            delay:0.8,
            ease: [0.44,0,0,1], 
          }
        }}
        viewport={{
          amount:"50%",
          once: true
        }}
         className="card-gradient-two flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5e] lg:w-[690px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={health} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">The Heartbeat of  Healthcare</h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">Your health and well-being are at the heart of everything we do. We understand that each patient is unique and we are dedicated to providing personalized, compassionate care tailored to your specific needs.</p>
          </div>
          <img src={patient} alt="patient" className="mt-28 absolute right-0 md:w-[32%] lg:w-[35%] w-[62%] bottom-0" />
        </motion.div>
      </div>
      {/* First Row */}

         {/* second Row */}
      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-8 3xl:max-w-[1200px]">
      <motion.div
      initial ={{opacity:0, y:50}}
      whileInView ={{
        opacity:1,
        y:0,
        transition:{
          duration:0.8,
          delay: 1,
          ease: [0.44,0,0,1], 
        }
      }}
      viewport={{
        amount:"50%",
        once: true
      }}
       className="card-gradient-three flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5e] lg:w-[690px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={care} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">Destination for Dental Excellence</h4>
            <p className="mt-4 w-[75%] text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">Our dedicated team of medical professionals is here to guide you on your health journey. From our experienced doctors to our skilled support staff.</p>
          </div>
          <img src={banner} alt="banner" className="w-[65%] left-36 -mt-28 relative" />
        </motion.div>
        <motion.div
        initial ={{opacity:0, y:50}}
        whileInView ={{
          opacity:1,
          y:0,
          transition:{
            duration:0.8,
            delay: 1.2,
            ease: [0.44,0,0,1], 
          }
        }}
        viewport={{
          amount:"50%",
          once: true
        }}
         className="card-gradient-four flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5e] lg:w-[486px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={doc} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">Cosmetic excellence and personalized care.</h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">We believe that beauty is more than just skin deep-its about embracing your uniqueness, enhancing your confidence and celebrating your individuality</p>
          </div>
          <img src={provide} alt="provide" className="w-[400px]" />
        </motion.div>
      </div>
      {/* second Row */}
    </section>
  );
};

export default Features;
