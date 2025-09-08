import VerticalShirt from "@/assets/images/top-selling/vertical-shirt.png";
import CourageShirt from "@/assets/images/top-selling/courage-shirt.png";
import LooseShorts from "@/assets/images/top-selling/loose-shorts.png";
import FadedJeans from "@/assets/images/top-selling/faded-jeans.png";
import Card from "@/components/custom/Card";

const topSellingClothes = [
  {
    imageSrc: VerticalShirt,
    title: "Vertical Striped Shirt",
    ratings: 5.0,
    price: 212,
    priceBefore: 232,
    less: 20,
  },
  {
    imageSrc: CourageShirt,
    title: "Courage Graphic T-shirt",
    ratings: 4.0,
    price: 145,
    priceBefore: null,
    less: null,
  },
  {
    imageSrc: LooseShorts,
    title: "Loose Fit Bermuda Shorts",
    ratings: 3,
    price: 80,
    priceBefore: null,
    less: null,
  },
  {
    imageSrc: FadedJeans,
    title: "Faded Skinny Jeans",
    ratings: 4.5,
    price: 210,
    priceBefore: null,
    less: null,
  },
];

const TopSelling = () => {
  return (
    <>
       <section className="pt-20 p-4 lg:pb-15 lg:px-10 lg:pt-25">
        <h2 className="text-5xl lg:text-5xl text-center tracking-wide">TOP SELLING</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {topSellingClothes.map((item, index) => (
            <Card key={index} {...item} className="mb-5 lg:mb-0"/>
          ))}
        </div>

        <button className="py-2 px-20 border rounded-full mt-10 mx-auto cursor-pointer block hover:bg-black hover:text-white transition">
          View All
        </button>

      </section>
    </>
  );
};

export default TopSelling;
