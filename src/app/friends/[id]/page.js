import friends from "../../../../public/friends.json";
import { notFound } from "next/navigation";
import FriendDetailCard from "@/components/FriendDetailCard";


export default async function FriendDetailPage({ params }) {
  const { id } = await params; // ✅ await params first

  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) return notFound();

  return (
    <FriendDetailCard friend ={friend}/>
  );
}