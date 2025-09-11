import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Visa from "@/assets/images/payments/visa.png";
import Mastercard from "@/assets/images/payments/mastercard.png";
import Paypal from "@/assets/images/payments/paypal.png";
import ApplePay from "@/assets/images/payments/apple-pay.png";
import GooglePay from "@/assets/images/payments/google-pay.png";

const icons = [FaXTwitter, FaFacebook, FaInstagram, FaGithub];

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0]">
      <div className="relative pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25 lg:pb-30 mt-60 lg:mt-40">
        <div className="absolute -top-40 lg:-top-16 left-1/2 transform -translate-x-1/2 bg-black text-white p-5 py-10 lg:p-10 rounded-xl shadow-lg w-[94%] flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-30">
          <p className="text-4xl font-extrabold text-start">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-auto">
            <div className="relative flex items-center">
              <Mail className="absolute text-gray-600 left-5 text-base" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="px-5 pl-15 py-1 rounded-full text-gray-600 w-full lg:w-70 bg-white"
              />
            </div>

            <button className="bg-white text-black px-5 py-2 text-sm rounded-full font-semibold hover:opacity-90 cursor-pointer">
              Subscribe to Newsletter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-10 mt-30 lg:mt-20 items-center justify-between gap-6 lg:gap-15">
          <div className="flex flex-col gap-5 col-span-10 lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl tracking-wide ">SHOP.CO</h2>
            <p className="text-gray-600 text-base">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2 items-center text-4xl">
              {icons.map((Icon, index) => (
                <Icon
                  key={index}
                  className="p-2 rounded-full hover:bg-gray-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 col-span-5 lg:col-span-2">
            <p className="text-lg font-medium tracking-wide">COMPANY</p>
            <div className="flex flex-col gap-5 text-base text-gray-600">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Works</a>
              <a href="#">Career</a>
            </div>
          </div>
           <div className="flex flex-col gap-5 col-span-5 lg:col-span-2">
            <p className="text-lg font-medium tracking-wide">HELP</p>
            <div className="flex flex-col gap-5 text-base text-gray-600">
              <a href="#">Customer Support</a>
              <a href="#">Delivery Details</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
           <div className="flex flex-col gap-5 col-span-5 lg:col-span-2">
            <p className="text-lg font-medium tracking-wide">FAQ</p>
            <div className="flex flex-col gap-5 text-base text-gray-600">
              <a href="#">Account</a>
              <a href="#">Manage Deliveries</a>
              <a href="#">Orders</a>
              <a href="#">Payments</a>
            </div>
          </div>
           <div className="flex flex-col gap-5 col-span-5 lg:col-span-2">
            <p className="text-lg font-medium tracking-wide">RESOURCES</p>
            <div className="flex flex-col gap-5 text-base text-gray-600">
              <a href="#">Free eBooks</a>
              <a href="#">Development Tutorial</a>
              <a href="#">How to - Blog</a>
              <a href="#">Youtube Playlist</a>
            </div>
          </div>
        </div>

        <hr className="bg-gray-300 my-10 border-0 h-[2px]"/>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <p className="text-gray-600">Shop.co &copy; 2025, All rights reserved</p>
          <div className="flex">
              <img src={Visa} alt="visa" />
              <img src={Mastercard} alt="mastercard" />
              <img src={Paypal} alt="paypal" />
              <img src={ApplePay} alt="applepay" />
              <img src={GooglePay} alt="googlepay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
