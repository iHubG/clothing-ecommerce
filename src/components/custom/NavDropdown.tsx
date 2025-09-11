import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { type DropdownProps } from "@/types";

const NavDropdown = ({ label, items, isMobile = false }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div className={`relative ${isMobile ? "w-full" : "mr-3"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full gap-1 px-2 py-1 ${
          isMobile ? "" : "cursor-pointer"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className={`${
            isMobile
              ? "pl-4 flex flex-col gap-1"
              : "absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
          }`}
        >
          {items.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === item.label ? null : item.label
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    {item.label}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSubmenu === item.label ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openSubmenu === item.label && (
                    <div className={isMobile ? "pl-4" : "pl-4"}>
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-2 hover:bg-gray-100 rounded"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
