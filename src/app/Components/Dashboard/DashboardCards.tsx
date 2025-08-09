"use client";

import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode;
  subtitle?: string;
};

function CardContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-xl shadow-sm ${className}`}>{children}</div>
  );
}

function StatCard({ title, value, icon, subtitle }: StatCardProps) {
  return (
    <CardContainer className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-gray-700">
            {icon}
          </span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span className="h-2 w-2 rounded-full bg-gray-300" />
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
      {subtitle && (
        <div className="mt-2 inline-flex items-center gap-2 text-xs text-gray-500">
          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">{subtitle}</span>
        </div>
      )}
    </CardContainer>
  );
}

function Donut({ percent = 78 }: { percent?: number }) {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div className="relative h-32 w-32">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#2563eb 0% ${clamped * 0.78}%, #ef4444 ${clamped * 0.78}% ${clamped}%, #e5e7eb ${clamped}% 100%)`,
        }}
      />
      <div className="absolute inset-2 rounded-full bg-white border border-gray-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold">{clamped}%</div>
          <div className="text-xs text-gray-500">Winrate</div>
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2 text-gray-700">
        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Profit
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Lose
      </div>
    </div>
  );
}

function TotalProfitCard() {
  const bars = [18, 80, 25, 55, 60, 62, 75];
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <CardContainer className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 border border-gray-200">$
          </span>
          <div>
            <div className="text-sm font-medium">Total Profit</div>
            <div className="text-xs text-gray-500">+34% ↑ · +300$</div>
          </div>
        </div>
        <button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Monthly ▾</button>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-3 items-end h-48">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div
              className={`w-8 rounded-md ${i === 2 ? "bg-blue-600" : "bg-gray-300"}`}
              style={{ height: `${h}%` }}
            />
            <div className="text-xs text-gray-500">{labels[i]}</div>
          </div>
        ))}
      </div>
    </CardContainer>
  );
}

function FriendsCard() {
  const friends = [
    { name: "C. Gabriel", tag: "+1000$", color: "text-blue-600", badgeBg: "bg-blue-50" },
    { name: "O. Darius", tag: "+1000$", color: "text-blue-600", badgeBg: "bg-blue-50" },
    { name: "T. Liviu", tag: "-300$", color: "text-red-600", badgeBg: "bg-red-50" },
    { name: "C. Antonio", tag: "+1000$", color: "text-blue-600", badgeBg: "bg-blue-50" },
  ];
  return (
    <CardContainer className="p-5">
      <div className="text-sm font-medium text-gray-700 mb-4">Friends</div>
      <div className="space-y-3">
        {friends.map((f) => (
          <div key={f.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-200" />
              <div>
                <div className="text-sm font-medium text-gray-900">{f.name}</div>
                <div className="text-xs text-gray-500">Beginner</div>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${f.badgeBg} ${f.color}`}>{f.tag}</span>
          </div>
        ))}
      </div>
    </CardContainer>
  );
}

function SkeletonListCard() {
  return (
    <CardContainer className="p-5">
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 rounded-md bg-gray-100 border border-gray-200" />
        ))}
      </div>
    </CardContainer>
  );
}

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {/* Row 1 */}
      <StatCard
        title="Profit made"
        value="$1320.34"
        subtitle="+34% ↑"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M3 3v18h18" /><path d="M7 13l3-3 4 4 5-5" />
          </svg>
        }
      />
      <StatCard
        title="Lots Used"
        value="12,30.3"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          </svg>
        }
      />
      <StatCard
        title="Avg. R:R"
        value="1:4.21"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M21 15V6a2 2 0 0 0-2-2H6" /><path d="M3 9v9a2 2 0 0 0 2 2h13" /><path d="M7 12h10M7 16h6" />
          </svg>
        }
      />

      {/* Row 2 */}
      <CardContainer className="p-5 flex items-center gap-6">
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700">Profit Statistic</div>
          <Legend />
        </div>
        <div className="ml-auto">
          <Donut percent={78} />
        </div>
      </CardContainer>

      <CardContainer className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            <div className="text-sm font-medium text-gray-700">Total Trades</div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">+203 ↑</span>
        </div>
        <div className="mt-3 text-3xl font-semibold">1034</div>
      </CardContainer>

      <CardContainer className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
            <div className="text-sm font-medium text-gray-700">Total loss</div>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-red-50 text-red-600">+203 →</span>
        </div>
        <div className="mt-3 text-3xl font-semibold text-gray-900">-1043$</div>
      </CardContainer>

      {/* Row 3 */}
      <TotalProfitCard />
      <SkeletonListCard />
      <FriendsCard />
    </div>
  );
}


