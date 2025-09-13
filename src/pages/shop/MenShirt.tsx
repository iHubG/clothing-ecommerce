import { AppBreadcrumbs } from "@/components/custom/AppBreadcrumbs";
import { Star, StarHalf } from "lucide-react";

const MenShirt = () => {
  return (
    <section className="pt-5 p-4 lg:p-0 lg:px-10 lg:pt-5">
      <AppBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Men", href: "/shop/men" },
          { label: "T-Shirts" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex flex-row lg:flex-col gap-5 order-2 lg:order-1">
            <div className="rounded-xl w-30 h-30 bg-[#F0EEED] border border-black"></div>
            <div className="rounded-xl w-30 h-30 bg-[#F0EEED] border hover:border-black"></div>
            <div className="rounded-xl w-30 h-30 bg-[#F0EEED] border hover:border-black"></div>
          </div>
          <div className="rounded-xl w-full h-80 lg:w-full lg:h-full bg-[#F0EEED] order-1 lg:order-2"></div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl tracking-wide">ONE LIFE GRAPHIC T-SHIRT</h2>
          <div className="flex gap-2">
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <StarHalf className="fill-yellow-400 text-yellow-400" />
            <p>4.5/5</p>
          </div>
          <div className="flex gap-2 item-center">
            <p className="text-lg">$260</p>
            <p className="text-lg">$300</p>
            <p className="text-red-500 bg-red-100 rounded-full px-3 py-[2px] text-sm flex items-center">-40%</p>
          </div>
          <p className="text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenShirt;
