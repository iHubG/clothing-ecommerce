import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import SimpleCard from "@/components/custom/SimpleCard";

const Testimonials = () => {
  return (
    <>
      <section className="pt-20 p-4 lg:p-0 lg:px-10 lg:pt-25">
        <div className="flex justify-between items-end lg:items-center mb-5 lg:mb-10">
          <h2 className="text-4xl lg:text-5xl text-start tracking-wide">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-5">
            <LuArrowLeft className="w-6 h-6" />
            <LuArrowRight className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <SimpleCard
            ratings={5}
            name={"Sarah M."}
            testimonial={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`}
          />
          <SimpleCard
            ratings={5}
            name={"Alex K."}
            testimonial={`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`}
          />
          <SimpleCard
            ratings={5}
            name={"James L."}
            testimonial={`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`}
          />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
