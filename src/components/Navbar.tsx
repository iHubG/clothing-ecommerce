import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:flex items-center justify-center p-5 gap-7">
        <h1 className="text-4xl font-semibold">SHOP.CO</h1>
        <div className="flex gap-7">
          <div className="relative mr-3">
            <Link to="/shop">Shop</Link>
            <ChevronDown className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4" />
          </div>
          <Link to="/onsale">On Sale</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/brands">Brands</Link>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search for products..."
            className="pl-10 bg-[#F0F0F0] rounded-xl md:w-sm w-lg lg:w-xl"
          />
        </div>
        <div className="flex gap-4">
          <ShoppingCart className="w-6 h-6" />
          <CircleUserRound className="w-6 h-6" />
        </div>
      </nav>

      {/* Mobile */}
      <nav className="flex lg:hidden flex-col p-4 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <button
              type="button"
              title={""}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 cursor-pointer" />
            </button>
            <h1 className="text-3xl font-semibold">SHOP.CO</h1>
          </div>

          <div className="flex gap-4">
            <Search
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-6 h-6 cursor-pointer"
            />
            <ShoppingCart className="w-6 h-6" />
            <CircleUserRound className="w-6 h-6" />
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col gap-4">
            <div className="relative mr-6">
              <Link to="/shop">Shop</Link>
              <ChevronDown className="absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4" />
            </div>
            <Link to="/onsale">On Sale</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/brands">Brands</Link>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 bg-[#F0F0F0] rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
