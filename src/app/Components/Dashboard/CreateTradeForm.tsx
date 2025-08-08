'use client';
import { useState } from 'react';

export default function CreateTradeForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/trades', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();
    setLoading(false);

    if (json.ok) {
      setMessage(`Trade salvat cu ID: ${json.trade.id}`);
      e.currentTarget.reset(); // curăță formularul
    } else {
      setMessage(`Eroare: ${json.error}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[500px]">
      <input
        name="pair"
        type="text"
        placeholder="Pair (ex: EURUSD)"
        required
        className="border p-2 rounded"
      />
      <input
        name="pnl"
        type="number"
        step="0.01"
        placeholder="Profit/Loss"
        required
        className="border p-2 rounded"
      />
      <input
        name="rr"
        type="number"
        step="0.01"
        placeholder="Risk:Reward (opțional)"
        className="border p-2 rounded"
      />
      <input
        name="stoploss_pips"
        type="number"
        placeholder="Stop Loss (pips)"
        className="border p-2 rounded"
      />
      <input
        name="takeprofit_pips"
        type="number"
        placeholder="Take Profit (pips)"
        className="border p-2 rounded"
      />
      <textarea
        name="comentariu"
        placeholder="Comentariu"
        className="border p-2 rounded"
      />
      <input
        name="photo"
        type="file"
        accept="image/*"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded"
      >
        {loading ? 'Se salvează...' : 'Salvează Trade'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
