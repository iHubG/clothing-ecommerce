import BlackShirt from "@/assets/images/new-arrivals/black-shirt.png";
import SkinnyJeans from "@/assets/images/new-arrivals/skinny-jeans.png";
import CheckeredShirt from "@/assets/images/new-arrivals/checkered-shirt.png";
import StripedShirt from "@/assets/images/new-arrivals/striped-shirt.png";
import Card from "@/components/custom/Card";

const newArrivalClothes = [
  {
    imageSrc: BlackShirt,
    title: "T-shirt with Tape Details",
    ratings: 4.5,
    price: 120,
    priceBefore: null,
    less: null,
  },
  {
    imageSrc: SkinnyJeans,
    title: "Skinny Fit Jeans",
    ratings: 3.5,
    price: 240,
    priceBefore: 260,
    less: 20,
  },
  {
    imageSrc: CheckeredShirt,
    title: "Checkered Shirt",
    ratings: 4.5,
    price: 180,
    priceBefore: null,
    less: null,
  },
  {
    imageSrc: StripedShirt,
    title: "Sleeve Striped T-shirt",
    ratings: 4.5,
    price: 120,
    priceBefore: 160,
    less: 30,
  },
];

const NewArrivals = () => {
  return (
    <>
      <section className="pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25">
        <h2 className="text-4xl lg:text-5xl text-center tracking-wide">NEW ARRIVALS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {newArrivalClothes.map((item, index) => (
            <Card key={index} {...item} className="mb-5 lg:mb-0"/>
          ))}
        </div>

        <button className="py-2 px-20 border rounded-full mt-10 mx-auto cursor-pointer block hover:bg-black hover:text-white transition">
          View All
        </button>

        <hr className="mt-15" />
      </section>
    </>
  );
};

export default NewArrivals;
