"use client";

import React from "react";

type Trade = {
  id: string;
  date: string;
  pair: string;
  rr: string;
  pnl: string;
  status: "win" | "loss";
};

const SAMPLE_TRADES: Trade[] = [
  { id: "#1021", date: "Nov 18", pair: "EURUSD", rr: "1:2.5", pnl: "+$120.50", status: "win" },
  { id: "#1020", date: "Nov 17", pair: "GBPUSD", rr: "1:1.2", pnl: "-$40.00", status: "loss" },
  { id: "#1019", date: "Nov 17", pair: "XAUUSD", rr: "1:3.1", pnl: "+$305.40", status: "win" },
  { id: "#1018", date: "Nov 16", pair: "US30", rr: "1:0.8", pnl: "-$75.10", status: "loss" },
  { id: "#1017", date: "Nov 16", pair: "BTCUSD", rr: "1:2.0", pnl: "+$210.00", status: "win" },
];

export default function TradesTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">Trade History</h3>
        <button className="text-[11px] px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">Export</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left font-medium px-4 py-2">ID</th>
              <th className="text-left font-medium px-4 py-2">Date</th>
              <th className="text-left font-medium px-4 py-2">Pair</th>
              <th className="text-left font-medium px-4 py-2">R:R</th>
              <th className="text-right font-medium px-4 py-2">PnL</th>
              <th className="text-left font-medium px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {SAMPLE_TRADES.map((t) => (
              <tr key={t.id} className="border-t border-gray-100 hover:bg-gray-50/50">
                <td className="px-4 py-2 text-gray-900">{t.id}</td>
                <td className="px-4 py-2 text-gray-500">{t.date}</td>
                <td className="px-4 py-2 text-gray-700 font-medium">{t.pair}</td>
                <td className="px-4 py-2 text-gray-700">{t.rr}</td>
                <td className={`px-4 py-2 text-right font-semibold ${t.status === "win" ? "text-emerald-600" : "text-red-600"}`}>{t.pnl}</td>
                <td className="px-4 py-2">
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${t.status === "win" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-red-50 text-red-600 border-red-100"}`}>
                    {t.status === "win" ? "Win" : "Loss"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


