"use client";

import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { MdOutlineVideocam } from "react-icons/md";

export default function TimelinePage() {

    const [entries] = useState(() => {
        return JSON.parse(localStorage.getItem("timeline") || "[]");
    });

    const [filter, setFilter] = useState("All");

    let filteredEntries = [];

    if (filter === "All") {
        filteredEntries = entries;
    } else if (filter === "Call") {
        filteredEntries = entries.filter((e) => e.type === "Call");
    } else if (filter === "Text") {
        filteredEntries = entries.filter((e) => e.type === "Text");
    } else if (filter === "Video") {
        filteredEntries = entries.filter((e) => e.type === "Video");
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold mb-6">Timeline</h1>

            <div className="flex gap-3 mb-8">

                <button
                    onClick={() => setFilter("All")}
                    className={`px-4 py-2 rounded-xl text-sm border transition
                    ${filter === "All" ? "bg-[#244D3F] text-white border-[#244D3F]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("Call")}
                    className={`px-4 py-2 rounded-xl text-sm border transition
                    ${filter === "Call" ? "bg-[#244D3F] text-white border-[#244D3F]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
                >
                    Call
                </button>

                <button
                    onClick={() => setFilter("Text")}
                    className={`px-4 py-2 rounded-xl text-sm border transition
                    ${filter === "Text" ? "bg-[#244D3F] text-white border-[#244D3F]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
                >
                    Text
                </button>

                <button
                    onClick={() => setFilter("Video")}
                    className={`px-4 py-2 rounded-xl text-sm border transition
                     ${filter === "Video" ? "bg-[#244D3F] text-white border-[#244D3F]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
                >
                    Video
                </button>

            </div>

            {filteredEntries.length === 0 ? (
                <p className="text-gray-400 text-center mt-20">
                    No {filter === "All" ? "" : filter} interactions yet.
                </p>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredEntries.map((entry) => (
                        <div
                            key={entry.id}
                            className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm"
                        >

                            <div className={`p-3 rounded-full
                                    ${entry.type === "Call" ? "bg-blue-100 text-blue-600" : ""}
                                    ${entry.type === "Text" ? "bg-green-100 text-green-600" : ""}
                                    ${entry.type === "Video" ? "bg-purple-100 text-purple-600" : ""}
                                `}>
                                {entry.type === "Call" && <IoCallOutline size={20} />}
                                {entry.type === "Text" && <BsChatText size={20} />}
                                {entry.type === "Video" && <MdOutlineVideocam size={20} />}
                            </div>

                            <div className="flex-1">
                                <p className="font-medium text-gray-800">{entry.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
                            </div>

                            <span className={`text-xs px-3 py-1 rounded-full font-medium
                                ${entry.type === "Call" ? "bg-blue-100 text-blue-600" : ""}
                                ${entry.type === "Text" ? "bg-green-100 text-green-600" : ""}
                                ${entry.type === "Video" ? "bg-purple-100 text-purple-600" : ""}
                            `}>
                                {entry.type}
                            </span>

                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}