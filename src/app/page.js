import FriendCard from "@/components/FriendCard";
import friends from "../../public/friends.json";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      <Banner/>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Your Friends
      </h1>

      <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-items-center">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

    </main>
  );
}