import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const Testimonials = () => {
  return (
    <>
      <section className="pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25">
        <div className="flex justify-between items-end lg:items-center">
          <h2 className="text-4xl lg:text-5xl text-start tracking-normal">
            OUR HAPPY CUSTOMERS
          </h2>
            <div className="flex gap-5">
                <LuArrowLeft className="w-6 h-6"/> 
                <LuArrowRight className="w-6 h-6"/>
            </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
