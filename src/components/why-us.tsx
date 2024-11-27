import whyGradient from "../assets/why-gradient.svg"
import emergency from "../assets/doc-0.jpg"
import dentistry from "../assets/doc-1.jpg"
import surgical from "../assets/doc-2.jpg"
import health from "../assets/doc-3.jpg"
const WhyUs = () => {
  
  return (
    <section
    id="services"
    className="relative flex w-full flex-col-reverse items-center justify-center gap-16 px-16 pt-6 md:flex-row md:px-10 md:pb-7 md:pt-24 xl:px-[159px]"
    >
      <img src={whyGradient} alt="" className="absolute bottom-0 left-0" />
      <div className="relative flex w-full flex-col-reverse gap-16 md:flex-row 3xl:max-w-[1200px]">

        {/* Left pannel content */}
        <div className="relative z-10 h-[350px] w-full object-cover sm:h-[450px] md:h-[591px] md:min-w-[400px] xl:min-w-[592px]">
         <img src={emergency} alt="" className="absolute z-[13] h-full scale-[1.01] object-cover transition-all duration-300"/>
        </div>
          {/* Left pannel content */}

        <div className="flex flex-col pt-[0px]">
            <h3 className="text-[32px] font-bold leading-[44px] tracking-[-0.72px] text-[#0e1829] md:text-[36px]">
              Medical departments.
            </h3>

          {/* right pannel content */}
            <div className="relative mt-6 flex w-full flex-col items-center justify-center gap-6">
                {/* Border line content */}
                <div className="[544px] absolute left-0 top-0 h-full w-1 bg-[#eaecf0]">
                   <div className="h-[70px] w-1 rounded-full bg-violet-700"/>
                </div>
                {/* Border line content */}

                <div className="py-4 pl-6 transition-all">
                  <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">Emergency Department</h5>
                  <p className="mt-2 text-base font-medium leading-6 text-[#445469]">
                    Even the all-powerfull pointing has no control about the blind texts it is an almost unorthographic life.
                  </p>
                </div>
            </div>
          {/* right pannel content */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
