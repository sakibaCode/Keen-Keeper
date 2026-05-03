"use client";

import { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";

const icons = {
    Call: <IoCallOutline size={20} />,
    Text: <BsChatText size={20} />,
    Video: <MdOutlineVideocam size={20} />,
};

const colors = {
    Call: "bg-blue-100 text-blue-600",
    Text: "bg-green-100 text-green-600",
    Video: "bg-purple-100 text-purple-600",
};

export default function TimelinePage() {

    const [entries, setEntries] = useState(() => {
        return JSON.parse(localStorage.getItem("timeline") || "[]");
    });

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8">Timeline</h1>

            {entries.length === 0 ? (
                <p className="text-gray-400 text-center mt-20">
                    No interactions yet.
                </p>
            ) : (
                <div className="flex flex-col gap-4">
                    {entries.map((entry) => (
                        <div
                            key={entry.id}
                            className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm"
                        >

                            <div className={`p-3 rounded-full ${colors[entry.type]}`}>
                                {icons[entry.type]}
                            </div>

                            <div className="flex-1">
                                <p className="font-medium text-gray-800">{entry.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
                            </div>

                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${colors[entry.type]}`}>
                                {entry.type}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}