import logoWhite from "./assets/mediprime.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative flex h-auto flex-col items-center justify-center gap-16 overflow-hidden bg-[#131316] px-6 py-10 text-white md:h-[650px] md:px-[400px] md:pb-12 md:pt-16 xl:px-[112px]">
      {/* Background Circle */}
      <div className="absolute left-0 top-0 h-[425px] w-[425px] rounded-full bg-white blur-[350px] translate-x-[-50%] translate-y-[-50%]" />
      
      {/* Logo with Animation */}
      <motion.img
        initial={{ opacity: 0}}
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
    </footer>
  );
};

export default Footer;
