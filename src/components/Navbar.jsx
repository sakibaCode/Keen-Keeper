import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        <Link href="/" className="text-xl font-semibold">
          Keen Keeper
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition">
            <GoHome size={18} />
            Home
          </Link>

          <Link href="/timeline" className="flex items-center gap-1 hover:text-primary transition">
            <IoTimerOutline size={18} />
            Timeline
          </Link>

          <Link href="/stats" className="flex items-center gap-1 hover:text-primary transition">
            <IoIosStats size={18} />
            Stats
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;