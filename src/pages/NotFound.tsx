import { Frown, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const randomPositions = [
  { top: "10%", left: "5%", size: 50, opacity: 0.13 },
  { top: "25%", left: "40%", size: 30, opacity: 0.14 },
  { top: "50%", left: "10%", size: 40, opacity: 0.15 },
  { top: "60%", left: "60%", size: 60, opacity: 0.15 },
  { top: "75%", left: "30%", size: 35, opacity: 0.13 },
];

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <section className="w-[70%] rounded shadow border p-8 py-15 text-center relative">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-gray-600">Page Not Found</p>

        <Frown
          size={350}
          className="absolute top-[20%] left-[15%] -z-10 opacity-20"
          style={{ width: 350, height: 350 }}
        />

        {randomPositions.map(({ top, left, size, opacity }, i) => (
          <Frown
            key={i}
            size={size}
            className="absolute -z-10 transition-opacity duration-300 ease-in-out"
            style={{
              top,
              left,
              opacity,
              width: size,
              height: size,
              position: "absolute",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "80%")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = opacity.toString())
            }
          />
        ))}

       <Button asChild className="w-fit mt-10 mx-auto flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 hover:bg-gray-800 text-white bg-black">
  <Link to="/">
    <MoveLeft />
    Go back Home
  </Link>
</Button>
      </section>
    </div>
  );
};

export default NotFound;
