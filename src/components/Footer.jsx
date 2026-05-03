import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1a3330] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div className="max-w-sm">
            <h1 className="text-2xl font-bold text-white">
              Keen<span className="text-green-400">Keeper</span>
            </h1>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Follow Us
            </h2>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-green-500 text-white p-3 rounded-xl transition">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-500 text-white p-3 rounded-xl transition">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-green-500 text-white p-3 rounded-xl transition">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;