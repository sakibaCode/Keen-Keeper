"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { MdOutlineVideocam, MdEdit, MdDeleteOutline, MdOutlineArchive } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const statusStyles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-yellow-500 text-white",
  "on-track": "bg-[#244D3F] text-white",
};

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

export default function FriendDetailCard({ friend }) {

  const [timeline, setTimeline] = useState([]);

 

  const handleCheckIn = (type) => {
    setTimeline((prev) => [
      {
        id: Date.now(),
        type,
        title: `${type} with ${friend.name}`,
        date: new Date().toLocaleDateString("en-US", {
          month: "short", day: "numeric", year: "numeric",
        }),
      },
      ...prev,
    ]);

  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative ">


      <div className="grid grid-cols-2 md:grid-cols-[280px_1fr] gap-6">

        {/* Left Column */}
        <div className="flex flex-col gap-4 md:border-r border-gray-200 md:pr-8">

         
          <div className="flex flex-col items-center text-center border border-gray-400 rounded-2xl">

            <Image
              src={friend.picture}
              alt={friend.name}
              width={110}
              height={110}
              className="rounded-full object-cover border-4 border-gray-100"
            />

            <h1 className="text-xl font-bold mt-4">{friend.name}</h1>

            <span className={`mt-2 text-xs px-3 py-1 rounded-full font-medium capitalize ${statusStyles[friend.status]}`}>
              {friend.status}
            </span>

            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {friend.tags.map((tag, index) => (
                <span key={index} className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 text-sm mt-4 italic text-[30px]">{friend.bio}</p>
            <p className="text-gray-400 text-xs mt-2 text-[30px]">Preferred: {friend.email}</p>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-4">

            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm text-gray-700 hover:bg-gray-50 transition">
              <LuAlarmClock size={16} /> Snooze 2 Weeks
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm text-gray-700 hover:bg-gray-50 transition">
              <MdOutlineArchive size={16} /> Archive
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm text-red-500 hover:bg-red-50 transition">
              <MdDeleteOutline size={16} /> Delete
            </button>

          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 md:pl-8">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
              <h1 className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</h1>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
              <h1 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h1>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
              <h1 className="text-xl font-bold text-[#244D3F]">{formatDate(friend.next_due_date)}</h1>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>

          </div>

          {/* Relationship Goal */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">

            <div className="flex justify-between items-center mb-3">

              <h2 className="font-semibold text-gray-800">Relationship Goal</h2>
              <button className="flex items-center gap-1 text-xs border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 transition">
                <MdEdit size={13} /> Edit
              </button>

            </div>

            <p className="text-gray-600 text-sm">
              Connect every <span className="font-bold text-gray-900">{friend.goal} days</span>
            </p>

          </div>

          {/* Quick Check-In */}

          <div className="bg-white border border-gray-100 rounded-2xl p-5 ">

            <h2 className="font-semibold text-gray-800 mb-4">Quick Check-In</h2>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() => handleCheckIn("Call")}
                className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl py-6 text-sm text-gray-700 hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition"
              >
                <IoCallOutline size={24} /> Call
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl py-6 text-sm text-gray-700 hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition"
              >
                <BsChatText size={24} /> Text
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl py-6 text-sm text-gray-700 hover:bg-[#244D3F] hover:text-white hover:border-[#244D3F] transition"
              >
                <MdOutlineVideocam size={24} /> Video
              </button>

            </div>

          </div>

          {/* Timeline entries */}
          {timeline.length > 0 && (
            <div className="bg-white border border-gray-100 rounded-2xl p-5">

              <h2 className="font-semibold text-gray-800 mb-4">Recent Check-Ins</h2>

              <div className="flex flex-col gap-3">

                {
                timeline.map((entry) => (
                  <div key={entry.id} className="flex items-center gap-3 text-sm text-gray-600 border-b border-gray-50 pb-2 last:border-0">
                    <span className="text-[#244D3F]">
                      {entry.type === "Call" ? <IoCallOutline size={16} /> : entry.type === "Text" ? <BsChatText size={16} /> : <MdOutlineVideocam size={16} />}
                    </span>

                    <span className="flex-1">{entry.title}</span>

                    <span className="text-gray-400 text-xs">{entry.date}</span>

                  </div>

                ))}
              </div>

            </div>
            
          )}

        </div>
      </div>
    </div>
  );
}