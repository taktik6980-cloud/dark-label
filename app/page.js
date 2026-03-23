import React from 'react';

export default function DarkLabelHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <nav className="border-b border-zinc-900 px-6 py-4 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black tracking-tighter">DARK LABEL</h1>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400">Каталог</a>
          <a href="#" className="hover:text-zinc-400">Доставка</a>
          <a href="#" className="hover:text-zinc-400 text-red-500">Sale</a>
        </div>
        <span>🛒</span>
      </nav>

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="text-center z-20 px-4">
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4 text-xs">Premium Casual & Terrace Wear</p>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">Stone Island <br /> & CP Company</h2>
          <button className="bg-white text-black px-10 py-4 font-bold uppercase text-sm hover:bg-zinc-200 transition-all">Смотреть дроп</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Куртки', 'Худи', 'Брюки', 'Аксессуары'].map((cat) => (
            <div key={cat} className="bg-[#111] border border-zinc-800 p-8 rounded-2xl hover:border-white transition-all">
               <div className="text-2xl mb-2">📦</div>
               <h3 className="text-sm uppercase tracking-widest font-bold">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-700 tracking-[0.5em] uppercase">© 2026 DARK LABEL SHOP</p>
      </footer>
    </div>
  );
}
