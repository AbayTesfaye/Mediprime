import logoWhite from "./assets/mediprime.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative flex h-auto flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-[400px] md:pb-12 md:pt-16 xl:px-[112px]">
      {/* Background Circle */}
      <div className="absolute left-0 top-0 h-[425px] w-[425px] rounded-full bg-white blur-[350px] translate-x-[-50%] translate-y-[-50%]" />

      {/* Logo with Animation */}
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{ amount: 0.5, once: true }}
        src={logoWhite}
        alt="Mediprime Logo"
        className="w-full max-w-md pt-8 3xl:max-w-[1200px]"
      />
      <div className="flex w-full flex-col items-center justify-center gap-12 3xl:max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0.22, 0.99],
            },
          }}
          viewport={{ amount: 0.5, once: true }}
          className="grid-row-6 grid w-full grid-cols-2 sm:grid-cols-3 place-content-center place-items-start gap-x-[32px] gap-y-[12px] font-bold text-[#94969D] md:grid-cols-6 md:grid-rows-3"
        >
          <p>Appointment</p>
          <p>Schedule</p>
          <p>Book</p>
          <p>Government</p>
          <p>Private</p>
          <p>
            Doctors
            <span className="ml-2 rounded-full border border-white/30 bg-white/10 px-[5px] py-[2px] text-center text-[12px] font-medium leading-[18px] text-white">
              New
            </span>
          </p>
          <p>Pricing</p>
          <p>First Aid</p>
          <p>Help center</p>
          <p>Medicine</p>
          <p>Place</p>
          <p>Rooms</p>
          <p>Tablets</p>
          <p>Contacts</p>
          <p>Support</p>
          <p>Comments</p>
          <p>Reach Us</p>
          <p>Contact</p>
        </motion.div>
        <div className="w-full text-base font-medium leading-6 text-[#94969C] text-center sm:flex items-center justify-center gap-[5px]" >
          <p>Copyright &copy; 2024 Mediprime. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
