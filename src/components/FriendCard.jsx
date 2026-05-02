import Link from "next/link";
import Image from "next/image";

const FriendCard = ({ friend }) => {
  return (
    <Link href={`/friends/${friend.id}`} className="container mx-auto">

      <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition cursor-pointer">

        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          unoptimized
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />

        <h2 className="text-2xl font-bold text-center mt-4">
          {friend.name}
        </h2>

        <p className="text-center text-gray-500 mt-1">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <span
            className={`
              px-3 py-1 rounded-full text-white text-sm
              ${
                friend.status === "overdue"
                  ? "bg-red-500"
                  : friend.status === "almost due"
                  ? "bg-yellow-500"
                  : "bg-[#244D3F]"
              }
            `}
          >
            {friend.status}
          </span>
        </div>

      </div>

    </Link>
  );
};

export default FriendCard;