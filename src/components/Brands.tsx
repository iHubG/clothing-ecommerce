import Versace from "@/assets/images/versace.png";
import Zara from "@/assets/images/zara.png";
import Gucci from "@/assets/images/gucci.png";
import Prada from "@/assets/images/prada.png";
import CalvinKlein from "@/assets/images/calvin-klein.png";

const Brands = () => {
  return (
    <div className="bg-black py-10 px-5 lg:px-15">
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-center lg:gap-10">
        <div className="flex gap-10 lg:gap-6 lg:contents">
          <img src={Versace} alt="versace" className="h-5 lg:h-8 w-auto filter brightness-0 invert" />
          <img src={Zara} alt="zara" className="h-5 lg:h-8 w-auto filter brightness-0 invert" />
          <img src={Gucci} alt="gucci" className="h-5 lg:h-8 w-auto filter brightness-0 invert" />
        </div>
        
        <div className="flex gap-6 lg:contents">
          <img src={Prada} alt="prada" className="h-5 lg:h-8 w-auto filter brightness-0 invert" />
          <img src={CalvinKlein} alt="calvin klein" className="h-5 lg:h-8 w-auto filter brightness-0 invert" />
        </div>
      </div>
    </div>
  );
};

export default Brands;