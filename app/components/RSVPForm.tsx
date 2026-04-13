"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function RSVPForm() {
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [noKontak, setNoKontak] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!noKontak.trim()) return;

    setStatus("submitting");

    // Kirim via WhatsApp message (bisa diganti API endpoint)
    const pesan = [
      `*Konfirmasi Kehadiran - Ulang Tahun Opung ke-80*`,
      ``,
      `Tujuan/Indikasi: ${tujuan || "-"}`,
      `Tgl Kedatangan: ${tanggal || "-"}`,
      `Keterangan: ${keterangan || "-"}`,
      `No Kontak: ${noKontak}`,
    ].join("\n");

    // Buka WhatsApp (ganti nomornya sesuai panitia)
    const wa = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-sm font-semibold text-stone-700">Terima kasih!</p>
        <p className="text-xs text-stone-400 mt-1">
          Konfirmasi kehadiranmu sudah terkirim.
        </p>
        <button
          onClick={() => {
            setTujuan(""); setTanggal(""); setKeterangan(""); setNoKontak(""); setStatus("idle");
          }}
          className="mt-4 text-[10px] tracking-widest uppercase text-stone-400 underline underline-offset-2"
        >
          Isi ulang
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Tujuan / Indikasi */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">
          Tujuan / Indikasi
        </label>
        <input
          type="text"
          value={tujuan}
          onChange={(e) => setTujuan(e.target.value)}
          placeholder="mis. Keluarga, Rekan kerja..."
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-stone-500 bg-white"
        />
      </div>

      {/* Tanggal Permintaan Pengiriman */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">
          Tanggal Permintaan Pengiriman
        </label>
        <input
          type="date"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-stone-500 bg-white"
        />
      </div>

      {/* Keterangan */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500">
          Keterangan
        </label>
        <textarea
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          rows={3}
          placeholder="Catatan tambahan..."
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-stone-500 bg-white resize-none"
        />
      </div>

      {/* No Kontak — mandatory */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-500 flex items-center gap-1">
          No Kontak
          <span className="text-red-400 text-xs leading-none">*</span>
        </label>
        <input
          type="tel"
          value={noKontak}
          onChange={(e) => setNoKontak(e.target.value)}
          required
          placeholder="08xxxxxxxxxx"
          className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm text-stone-700 placeholder:text-stone-300 focus:outline-none focus:border-stone-500 bg-white"
        />
        <p className="text-[10px] text-stone-400">Wajib diisi</p>
      </div>

      <button
        type="submit"
        disabled={!noKontak.trim() || status === "submitting"}
        className="mt-1 bg-stone-800 text-white text-[10px] tracking-[0.3em] uppercase font-bold py-3.5 rounded-full hover:bg-stone-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Mengirim..." : "Kirim Konfirmasi"}
      </button>
    </form>
  );
}
