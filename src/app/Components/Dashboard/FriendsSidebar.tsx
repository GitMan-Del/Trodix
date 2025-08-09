"use client";

import React from "react";

type Friend = { name: string; tag: string; level: string; colorClass: string; badgeBg: string };

const FRIENDS: Friend[] = [
  { name: "C. Gabriel", tag: "+1000$", level: "Beginner", colorClass: "text-blue-600", badgeBg: "bg-blue-50" },
  { name: "O. Darius", tag: "+1000$", level: "Beginner", colorClass: "text-blue-600", badgeBg: "bg-blue-50" },
  { name: "T. Liviu", tag: "-300$", level: "Beginner", colorClass: "text-red-600", badgeBg: "bg-red-50" },
  { name: "C. Antonio", tag: "+1000$", level: "Beginner", colorClass: "text-blue-600", badgeBg: "bg-blue-50" },
];

export default function FriendsSidebar() {
  return (
    <aside className="h-full px-5 py-2 bg-white border border-gray-200">
      <div className="text-sm font-semibold text-gray-800 mb-3">Friends</div>
      <div className="space-y-3">
        {FRIENDS.map((f) => (
          <div key={f.name} className="flex items-center justify-between rounded-md border border-gray-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 ring-1 ring-gray-300/50" />
              <div>
                <div className="text-sm font-medium text-gray-900 leading-5">{f.name}</div>
                <div className="text-[11px] text-gray-500">{f.level}</div>
              </div>
            </div>
            <span className={`text-[11px] px-2 py-0.5 rounded-full border ${f.badgeBg} ${f.colorClass} border-current/10`}>{f.tag}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}


