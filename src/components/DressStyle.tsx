import Casual from "@/assets/images/dress-style/casual.png";
import Formal from "@/assets/images/dress-style/formal.png";
import CasualMobile from "@/assets/images/dress-style/casual-mobile.png";
import FormalMobile from "@/assets/images/dress-style/formal-mobile.png";
import Party from "@/assets/images/dress-style/party.png";
import PartyMobile from "@/assets/images/dress-style/party-mobile.png";
import Gym from "@/assets/images/dress-style/gym.png";
import GymMobile from "@/assets/images/dress-style/gym-mobile.png";
import { useEffect, useState } from "react";

const DressStyle = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25">
        <div className="bg-[#F0F0F0] px-6 pt-15 pb-6 lg:px-10 lg:py-20 rounded-lg">
          <h2 className="text-5xl lg:text-5xl text-center tracking-normal">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-10 lg:mt-20">
            {/* Casual */}
            <div className="relative rounded-lg lg:col-span-2 bg-white border overflow-hidden">
              <p className="text-2xl font-semibold m-5 absolute top-0 left-0 z-10">
                Casual
              </p>
              <img
               src={isMobile ? CasualMobile : Casual}
                alt="casual"
                className=" w-full h-[200px] lg:h-[289px] object-cover rounded-lg"
              />
            </div>

            {/* Formal */}
            <div className="relative rounded-lg lg:col-span-3 bg-white border overflow-hidden">
              <p className="text-2xl font-semibold m-5 absolute top-0 left-0 z-10">
                Formal
              </p>
              <img
                src={isMobile ? FormalMobile : Formal}
                alt="formal"
                className="w-full h-[200px] lg:h-[289px] object-cover rounded-lg"
              />
            </div>

            {/* Party */}
            <div className="relative rounded-lg lg:col-span-3 bg-white border overflow-hidden">
              <p className="text-2xl font-semibold m-5 absolute top-0 left-0 z-10">
                Party
              </p>
              <img
                src={isMobile ? PartyMobile : Party}
                alt="party"
                className="w-full h-[200px] lg:h-[289px] object-cover rounded-lg"
              />
            </div>

             {/* Gym */}
            <div className="relative rounded-lg lg:col-span-2 bg-white border overflow-hidden">
              <p className="text-2xl font-semibold m-5 absolute top-0 left-0 z-10">
                Gym
              </p>
              <img
               src={isMobile ? GymMobile : Gym}
                alt="gym"
                className=" w-full h-[200px] lg:h-[289px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DressStyle;
