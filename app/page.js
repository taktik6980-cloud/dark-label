"use client";

import './globals.css';
import { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Tech Hoodie Black",
    price: 1200,
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1520975922284-9e0ce827b456",
  },
  {
    id: 2,
    name: "Street Jacket Grey",
    price: 2100,
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">DARK LABEL</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="bg-zinc-900 p-4 rounded-2xl">
            <img src={product.image} className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400">{product.price} грн</p>

            <div className="flex gap-2 mt-2">
              {product.sizes.map((size) => (
                <span key={size} className="border px-2 py-1 text-sm">
                  {size}
                </span>
              ))}
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-white text-black py-2 rounded-xl"
            >
              Купить
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 bg-white text-black p-4 rounded-xl">
        Корзина: {cart.length}
      </div>
    </div>
  );
}
