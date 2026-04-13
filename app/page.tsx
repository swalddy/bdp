import Countdown from "./components/Countdown";

/* ── Inline SVG icons ─────────────────────────────────── */

function IconParty() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 34L6 8l22 10-8 4-4 12z" />
      <line x1="28" y1="12" x2="34" y2="6" />
      <line x1="32" y1="14" x2="36" y2="10" />
      <line x1="30" y1="8" x2="34" y2="4" />
    </svg>
  );
}


function IconCake() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 0-1 2-1 3s1 2 1 2 1-1 1-2-1-3-1-3z" />
      <rect x="3" y="9" width="18" height="4" rx="1" />
      <path d="M3 13v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7" />
      <path d="M3 16s2-1 4-1 4 2 6 2 4-1 6-1" />
    </svg>
  );
}

/* ── Timeline dot ─────────────────────────────────────── */
function TimelineItem({ time, label, last = false }: { time: string; label: string; last?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-stone-400 mt-1 shrink-0" />
        {!last && <div className="w-px flex-1 bg-stone-300 mt-1" style={{ minHeight: 40 }} />}
      </div>
      <div className="pb-6">
        <p className="text-xs font-bold tracking-widest uppercase text-stone-500">{time}</p>
        <p className="text-sm text-stone-700 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function Home() {
  return (
    /* Outer wrapper: gray bg to simulate phone bezel on desktop */
    <div className="min-h-screen bg-stone-300 flex justify-center py-0 sm:py-8">
      {/* Mobile container — locked to ~390px */}
      <div
        className="relative w-full bg-[#faf7f2] overflow-hidden"
        style={{ maxWidth: 390, minHeight: "100vh" }}
      >

        {/* ── Hero ───────────────────────────────────────── */}
        <section
          className="relative flex flex-col items-center justify-center text-white text-center"
          style={{
            height: "72vh",
            background: "linear-gradient(160deg, #1a1a1a 0%, #2d2d2d 50%, #111 100%)",
          }}
        >
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundSize: "200px",
            }}
          />

          {/* Photo hint — replace public/couple-hero.jpg with real photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/opung1.jpg"
            alt="Opung"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
          />

          <div className="relative z-10 flex flex-col items-center px-4">
            <p className="text-[10px] tracking-[0.5em] uppercase font-light mb-3 opacity-90">
              Syukuran Ulang Tahun
            </p>
            <h1
              className="text-6xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Opung Andro
            </h1>
            <p className="text-lg font-bold tracking-[0.2em] opacity-90 mb-1">ke-80</p>
            <p className="text-xs tracking-[0.4em] opacity-80">0 1 · 0 5 · 2 0 2 6</p>
            <p className="text-[10px] tracking-[0.2em] opacity-70 mt-2">Jumat, 1 Mei 2026</p>

            {/* Cake icon */}
            <div className="mt-6 opacity-70">
              <IconCake />
            </div>
          </div>

          {/* Torn-paper wave bottom */}
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg viewBox="0 0 390 55" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
              <path
                d="M0,35 C30,55 60,15 90,35 C120,55 150,20 180,38 C210,56 240,18 270,36 C300,54 330,22 360,40 C375,49 385,44 390,42 L390,55 L0,55 Z"
                fill="#faf7f2"
              />
            </svg>
          </div>
        </section>

        {/* ── Countdown ──────────────────────────────────── */}
        <section className="px-3 pt-4 pb-6 text-center">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-stone-400 mb-4">
            Hitung Mundur:
          </p>
          <Countdown />
          <p className="mt-4 text-sm text-stone-500 leading-relaxed tracking-wide">
            Dengan penuh syukur, kami mengundang kehadiranmu untuk merayakan
            ulang tahun Opung kami yang ke-80
          </p>
          <p className="mt-3 text-xs font-bold tracking-[0.3em] uppercase text-stone-700">
            Jumat · 1 · Mei
          </p>
        </section>

        {/* Divider */}
        <div className="mx-4 h-px bg-stone-200" />

        {/* ── Venue ──────────────────────────────────────── */}
        <section className="px-3 py-6 text-center">
          <div className="flex justify-center mb-2 text-stone-600">
            <IconParty />
          </div>
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-stone-700 mb-3">
            Syukuran Ulang Tahun ke-80
          </h2>
          <p className="text-sm font-semibold text-stone-700 leading-relaxed">11:00 WIB · 1 Mei 2026</p>
          <p className="text-sm text-stone-600 mt-1.5">Auditorium Gedung Gelanggang Remaja</p>
          <p className="text-sm text-stone-600">Rawamangun</p>
          <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
            (seberang Leisure Inn Hotel Arion)<br />
            Jl. Pemuda No.19, Rawamangun,<br />
            Pulo Gadung, Jakarta Timur
          </p>
          <a
            href="https://maps.google.com/?q=Gelanggang+Remaja+Rawamangun+Jl+Pemuda+No+19+Jakarta+Timur"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-stone-800 text-white text-[10px] tracking-[0.3em] uppercase font-bold py-3 px-8 rounded-full hover:bg-stone-700 transition-colors"
          >
            Lihat Lokasi
          </a>
        </section>

        {/* Divider */}
        <div className="mx-4 h-px bg-stone-200" />

        {/* ── Cronograma ──────────────────────────────────── */}
        <section className="px-3 py-6">
          <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-stone-700 mb-4 text-center">
            Rundown Acara
          </h2>
          <TimelineItem time="11:10" label="Ibadah Syukur" />
          <TimelineItem time="12:00" label="Acara Makan (nyanyi dari keluarga)" />
          <TimelineItem time="13:00" label="Sambutan, Hiburan, Sulang-sulangan" />
          <TimelineItem time="13:00+" label="Choir Boru & Doa Penutup" />
          <TimelineItem time="15:30" label="Penutupan & Perpisahan" last />
        </section>

        {/* Divider */}
        <div className="mx-4 h-px bg-stone-200" />

        {/* ── Foto pareja ────────────────────────────────── */}
        <div
          className="relative mx-auto overflow-hidden"
          style={{ height: 240 }}
        >
          {/* Placeholder background */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(180deg, #2a2a2a 0%, #111 100%)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/opung2.jpg"
            alt="Opung"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
          />
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-stone-200 mt-0" />

        {/* ── Tentang Opung ───────────────────────────────── */}
        <section className="px-4 py-6 text-center">
          <p className="text-sm text-stone-600 leading-relaxed max-w-[320px] mx-auto">
            Di usia yang penuh berkat ini, Opung Andro masih dianugerahi kesehatan, kebahagiaan, serta semangat untuk terus berbagi kasih dan cerita indah bersama keluarga.
          </p>
        </section>

        {/* Divider */}
        <div className="mx-4 h-px bg-stone-200" />

        {/* ── Petuah ──────────────────────────────────────── */}
        <section className="px-4 py-6 text-center">
          <p className="text-sm text-stone-700 leading-relaxed font-semibold max-w-[320px] mx-auto mb-2">
            &ldquo;Mahkota orang-orang tua adalah anak cucu dan kebanggaan anak-anak adalah nenek moyang mereka&rdquo;
          </p>
          <p className="text-xs text-stone-400 tracking-wide">Amsal 17:6</p>
        </section>


        {/* Footer */}
        <footer className="pb-8 text-center">
          <p
            className="text-2xl text-stone-400"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Opung
          </p>
          <p className="text-[10px] tracking-widest text-stone-300 mt-1 uppercase">
            80 Tahun · 1 · 05 · 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
