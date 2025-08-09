'use client';
import { useState, useRef } from 'react';
import {
  LucideCheckCircle,
  LucideAlertCircle,
  LucideX,
  LucideImage,
} from 'lucide-react';
import Image from 'next/image';

type CreateTradeFormProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

export default function CreateTradeForm({ onClose, onSuccess }: CreateTradeFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      setMessage({ type: 'success', text: `Trade salvat cu ID: ${json.trade.id}` });
      e.currentTarget.reset(); // curăță formularul
      setPreview(null);
      if (onSuccess) onSuccess();
    } else {
      setMessage({ type: 'error', text: `Eroare: ${json.error}` });
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }

  function handleClearPhoto() {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-[560px] mx-auto relative ring-1 ring-black/5">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
            <LucideImage className="h-5 w-5 text-blue-600" />
          </span>
          Adaugă un Trade
        </h2>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Închide"
            className="rounded-md p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
          >
            <LucideX className="h-5 w-5" />
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pair <span className="text-red-500">*</span></label>
          <input
            name="pair"
            type="text"
            placeholder="ex: EURUSD"
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Profit/Loss <span className="text-red-500">*</span></label>
          <input
            name="pnl"
            type="number"
            step="0.01"
            placeholder="Profit/Loss"
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Risk:Reward</label>
            <input
              name="rr"
              type="number"
              step="0.01"
              placeholder="opțional"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Stop Loss (pips)</label>
            <input
              name="stoploss_pips"
              type="number"
              placeholder="Stop Loss"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Take Profit (pips)</label>
            <input
              name="takeprofit_pips"
              type="number"
              placeholder="Take Profit"
              className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Comentariu</label>
          <textarea
            name="comentariu"
            placeholder="Comentariu"
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Poză (opțional)</label>
          <div className="flex items-center gap-4">
            <input
              ref={fileInputRef}
              name="photo"
              type="file"
              accept="image/*"
              className="border p-2 rounded w-full"
              onChange={handlePhotoChange}
            />
            {preview && (
              <div className="relative">
                <Image src={preview} alt="Preview" className="h-16 w-16 object-cover rounded border" />
                <button
                  type="button"
                  onClick={handleClearPhoto}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                  aria-label="Șterge poza"
                >
                  <LucideX className="h-4 w-4 text-red-500" />
                </button>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-lg font-semibold shadow ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {loading && (
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          )}
          {loading ? 'Se salvează...' : 'Salvează Trade'}
        </button>
        {message && (
          <div
            className={`flex items-center gap-2 mt-2 px-3 py-2 rounded ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {message.type === 'success' ? (
              <LucideCheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <LucideAlertCircle className="h-5 w-5 text-red-500" />
            )}
            <span>{message.text}</span>
            <button
              type="button"
              className="ml-auto"
              onClick={() => setMessage(null)}
              aria-label="Închide mesajul"
            >
              <LucideX className="h-4 w-4" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
