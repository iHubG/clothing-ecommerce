import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Model from "@/assets/images/model.png";
import { SiGooglegemini } from "react-icons/si";

const stats = [
  { value: "200", label: "International Brands" },
  { value: "2,000", label: "High-Quality Products" },
  { value: "30,000", label: "Happy Customers" },
];

const HeroSection = () => {
  return (
    <section className="bg-[#F0F0F0] lg:p-12 lg:pb-0 h-auto overflow-x-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:gap-8 max-w-[100vw]">
        <div className="flex flex-col p-4 pt-10 lg:p-0 lg:pt-10">
          <h2 className="text-5xl lg:text-6xl leading-[4rem] tracking-wide origin-left">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h2>
          <p className="opacity-60 mt-3 text-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Button className="w-full lg:w-fit rounded-full px-14 mt-7 mb-12 py-6 xl:py-5">
            Shop Now
          </Button>

          <div className="grid grid-cols-2 gap-6 md:flex md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`
              flex flex-col items-center text-center
              pr-6
              ${index === 0 ? "border-r-2" : ""}
              ${index === 2 ? "col-span-2 border-r-0" : ""}
              md:border-r-2 md:last:border-r-0 md:items-start md:text-left
            `}
              >
                <h3 className="text-3xl tracking-wide origin-left flex items-baseline">
                  <span>{stat.value}</span>
                  <Plus className="w-5 h-5" strokeWidth={3} />
                </h3>
                <p className="opacity-60 text-sm lg:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center relative mt-5 lg:mt-0">
          <SiGooglegemini className="absolute bottom-60 left-5 text-black w-12 h-12" />

          <img
            src={Model}
            alt="model"
            className="max-w-full h-auto object-contain relative z-10 pt-0"
          />

          <SiGooglegemini className="absolute top-5 right-5 lg:top-15 lg:right-15 text-black w-20 h-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
