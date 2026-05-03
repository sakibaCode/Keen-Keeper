"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function StatsPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("timeline");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const callCount = entries.filter((e) => e.type === "Call").length;
  const textCount = entries.filter((e) => e.type === "Text").length;
  const videoCount = entries.filter((e) => e.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const colors = ["#244D3F", "#4CAF50", "#81C784"];

  const renderLabel = ({ name, percent }) => {
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-2">Friendship Analytics</h1>
      <p className="text-gray-500 text-sm mb-8">Overview of your interactions with friends</p>

      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-[#244D3F]">{callCount}</h2>
          <p className="text-sm text-gray-500 mt-1">Calls</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-[#244D3F]">{textCount}</h2>
          <p className="text-sm text-gray-500 mt-1">Texts</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-[#244D3F]">{videoCount}</h2>
          <p className="text-sm text-gray-500 mt-1"> Video Calls</p>
        </div>

      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <h2 className="font-semibold text-gray-800 mb-1">Interactions Breakdown</h2>
        <p className="text-xs text-gray-400 mb-6">Total: {entries.length} interactions</p>

        {entries.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
            No check-ins yet! Go to a friend page and log a Call, Text, or Video.
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label={renderLabel}
                labelLine={true}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} interactions`, name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}

      </div>

    </div>
  );
}