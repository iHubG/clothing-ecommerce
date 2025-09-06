import { type SimpleCardProps } from "@/types";
import { Star } from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const SimpleCard = ({
  ratings,
  name,
  testimonial,
  className,
}: SimpleCardProps) => {
  return (
    <div className={`border p-6 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < ratings ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-lg font-semibold flex gap-2 items-center mb-1">
        {name}
        <RiVerifiedBadgeFill color="#01AB31" />
      </p>
      <p className="text-base">{testimonial}</p>
    </div>
  );
};

export default SimpleCard;
