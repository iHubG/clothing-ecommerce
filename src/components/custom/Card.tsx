import { type CardProps } from "@/types";
import { Star } from "lucide-react";

const Card = ({
  imageSrc,
  title,
  ratings,
  price,
  priceBefore,
  less,
  className,
}: CardProps) => {
  const maxStars = 5;
  const fullStars = Math.floor(ratings);
  const hasHalfStar = ratings % 1 >= 0.5;

  return (
    <section className={`flex flex-col gap-2 ${className}`}>
      <div className="rounded-lg p-4 bg-[#F0EEED]">
        <img
          src={imageSrc}
          alt={title}
          className="w-auto h-40 lg:h-60 mx-auto"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="opacity-90 text-xl font-bold">{title}</p>

        <div className="flex items-center gap-1">
          {[...Array(maxStars)].map((_, i) => {
            if (i < fullStars) {
              return (
                <Star
                  key={i}
                  size={16}
                  className="fill-yellow-400 stroke-yellow-400"
                />
              );
            } else if (i === fullStars && hasHalfStar) {
              return (
                <div key={i} className="relative w-4 h-4">
                  <Star size={16} className="stroke-gray-300" />
                  <Star
                    size={16}
                    className="fill-yellow-400 stroke-yellow-400 absolute top-0 left-0"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                </div>
              );
            } else {
              return <Star key={i} size={16} className="stroke-gray-300" />;
            }
          })}
          <span className="ml-2 text-sm text-gray-600">{ratings}/5</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="font-bold">${price}</span>
          {priceBefore && (
            <span className="text-gray-500 line-through ml-2">
              ${priceBefore}
            </span>
          )}
          {less && (
            <span className="text-red-600 ml-2 bg-red-100 px-2 py-[4px] text-[.6rem] rounded-full">
              -{less}%
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
