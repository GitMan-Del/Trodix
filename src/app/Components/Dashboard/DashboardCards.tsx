"use client";

import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode;
  subtitle?: string;
  subtitleClassName?: string;
  valueClassName?: string;
  checkbox?: boolean;
};

function CardContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  subtitle,
  subtitleClassName = "bg-blue-50 text-blue-600 border-blue-100",
  valueClassName = "text-gray-900",
  checkbox = false,
}: StatCardProps) {
  // Consistent increased padding for all cards
  return (
    <CardContainer className="px-6 py-5">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          {checkbox && <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />}
          {icon && (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-50 border border-gray-200 text-gray-700">
              {icon}
            </span>
          )}
          <span className="text-[13px] font-medium">{title}</span>
        </div>
        {subtitle && (
          <span
            className={`text-[11px] px-2 py-0.5 rounded-md border ${subtitleClassName}`}
          >
            {subtitle}
          </span>
        )}
      </div>
      <div className={`mt-3 text-xl sm:text-2xl font-semibold tracking-tight ${valueClassName}`}>{value}</div>
    </CardContainer>
  );
}

export default function DashboardCards() {
  return (
    <div className="w-full flex gap-3">
      {/* Top stats - staggered across grid */}
      <div>
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
      </div>
      <div>
        <StatCard
          title="Lots Used"
          value="12,30.3"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
          }
        />
      </div>
      <div>
        <StatCard
          title="Avg. R:R"
          value="4.21"
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M21 15V6a2 2 0 0 0-2-2H6" /><path d="M3 9v9a2 2 0 0 0 2 2h13" /><path d="M7 12h10M7 16h6" />
            </svg>
          }
        />
      </div>
      <div>
        <StatCard
          title="Total Trades"
          value="1034"
          subtitle="+203 ↑"
          checkbox={true}
        />
      </div>
      <div>
        <StatCard
          title="Total loss"
          value="-1043$"
          subtitle="+203 →"
          subtitleClassName="bg-red-50 text-red-600 border-red-100"
          valueClassName="text-gray-900"
          checkbox={true}
        />
      </div>
    </div>
  );
}



