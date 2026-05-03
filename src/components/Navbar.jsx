"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoHome } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <GoHome size={18} />,
    },
    {
      name: "Timeline",
      href: "/timeline",
      icon: <IoTimerOutline size={18} />,
    },
    {
      name: "Stats",
      href: "/stats",
      icon: <IoIosStats size={18} />,
    },
  ];

  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        <Link href="/" className="text-2xl font-bold ">
              Keen<span className="text-[#426a6c]">Keeper</span>
        </Link>

        <div className="flex items-center gap-3 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-1 px-4 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-[#244D3F] text-white"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Navbar;