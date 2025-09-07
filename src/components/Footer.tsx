import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0]">
      <div className="relative pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25 mt-60 lg:mt-40">
        <div className="absolute -top-40 lg:-top-16 left-1/2 transform -translate-x-1/2 bg-black text-white p-5 py-10 lg:p-10 rounded-xl shadow-lg w-[90%] flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-30">
          <p className="text-4xl font-extrabold text-start">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-3 lg:gap-5">
            <div className="relative flex items-center">
              <Mail className="absolute text-gray-600 left-5 text-base" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="px-5 pl-15 py-1 rounded-full text-gray-600 w-70 bg-white"
              />
            </div>

            <button className="bg-white text-black px-5 py-2 text-sm rounded-full font-semibold hover:opacity-90 cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
