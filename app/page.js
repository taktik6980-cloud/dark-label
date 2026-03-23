import React from 'react';
import { ShoppingBag, Truck, ShieldCheck, Instagram } from 'lucide-react';

// Компонент иконки категории (имитация тех самых "прикольных картинок")
const CategoryCard = ({ title, icon }) => (
  <div className="group cursor-pointer bg-[#111] border border-zinc-800 p-8 rounded-2xl flex flex-col items-center transition-all hover:border-white hover:scale-105">
    <div className="mb-4 text-zinc-500 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-sm uppercase tracking-widest font-bold">{title}</h3>
  </div>
);

export default function DarkLabelHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Шапка */}
      <nav className="border-b border-zinc-900 px-6 py-4 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-black tracking-tighter">DARK LABEL</h1>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-zinc-400">Каталог</a>
          <a href="#" className="hover:text-zinc-400">Доставка</a>
          <a href="#" className="hover:text-zinc-400 text-red-500">Sale</a>
        </div>
        <ShoppingBag size={20} />
      </nav>

      {/* Главный баннер */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        <div className="text-center z-20 px-4">
          <p className="text-zinc-500 uppercase tracking-[0.3em] mb-4 text-xs">Premium Casual & Terrace Wear</p>
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
            Stone Island <br /> & CP Company
          </h2>
          <button className="bg-white text-black px-10 py-4 font-bold uppercase text-sm hover:bg-zinc-200 transition-all">
            Смотреть дроп
          </button>
        </div>
      </section>

      {/* Категории (те самые иконки) */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-zinc-500 uppercase tracking-widest text-xs mb-10 text-center">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard title="Куртки" icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 4L12 2L4 4v10c0 5.5 4.5 10 8 10s8-4.5 8-10V4z"/></svg>} />
          <CategoryCard title="Худи" icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 14.5l-5-2 5-2m10 0l5 2-5 2M9 19l-2 2h10l-2-2M12 3v13"/></svg>} />
          <CategoryCard title="Брюки" icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2h8l2 20h-4l-2-10-2 10H6L8 2z"/></svg>} />
          <CategoryCard title="Аксессуары" icon={<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} />
        </div>
      </section>

      {/* Инфо-блок */}
      <section className="bg-[#050505] py-20 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Truck className="mb-4 text-zinc-600" size={32} />
            <h4 className="font-bold mb-2 uppercase text-sm">Быстрая доставка</h4>
            <p className="text-zinc-500 text-xs">Новая Почта (наложка по предоплате 200 грн) или Укрпочта.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="mb-4 text-zinc-600" size={32} />
            <h4 className="font-bold mb-2 uppercase text-sm">100% Оригинал / HQ Copy</h4>
            <p className="text-zinc-500 text-xs">Только лучшее качество материалов и фурнитуры.</p>
          </div>
          <div className="flex flex-col items-center">
            <Instagram className="mb-4 text-zinc-600" size={32} />
            <h4 className="font-bold mb-2 uppercase text-sm">На связи 24/7</h4>
            <p className="text-zinc-500 text-xs">Поддержка в Telegram и Instagram по любым вопросам.</p>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-10 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-700 tracking-[0.5em] uppercase">© 2026 DARK LABEL SHOP. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  );
}
