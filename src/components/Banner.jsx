import { TiPlus } from "react-icons/ti";
import friends from "../../public/friends.json"


const totalFriends = friends.length;
const onTrack = friends.filter((f) => f.status === "on-track").length;
const needAttention = friends.filter((f) => f.status === "overdue" || f.status === "almost due").length;

const stats = [
  { value: totalFriends, label: "Total Friends" },
  { value: onTrack, label: "On Track" },
  { value: needAttention, label: "Need Attention" },
  { value: 12, label: "Interactions this month" },
];
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center text-center">

      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-2xl">
        Friends to keep close in your life
      </h3>

      <p className="mt-4 text-gray-500 max-w-xl text-sm md:text-base">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      <button className="mt-6 flex items-center gap-2 bg-[#244D3F] hover:bg-[#1b3a30] text-white px-5 py-2.5 rounded-lg transition">
        <TiPlus size={20} />
        Add Friend
      </button>

      {/* summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-3xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-5 flex flex-col items-center justify-center"
          >
            <h2 className="text-xl md:text-2xl text-[#244D3F] font-semibold">
              {item.value}
            </h2>
            <p className="text-sm text-gray-500 mt-1 text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Banner;