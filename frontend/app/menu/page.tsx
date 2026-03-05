"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function OrderPage() {
  const [items, setItems] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const limit = 6;

  /* LOAD CATEGORIES */

  const loadCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  /* LOAD MENU ITEMS */

  const loadItems = async (pageNumber: number, categoryId?: number | null) => {
    let url = `/menu-items?page=${pageNumber}&limit=${limit}`;

    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }

    const res = await api.get(url);

    setItems(res.data.data);
    setTotalPages(res.data.meta.totalPages);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadItems(page, selectedCategory);
  }, [page, selectedCategory]);

  return (
    <div className="bg-slate-200 min-h-screen p-10">
      {/* HEADER */}

      <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-black mb-2">WHAT WE SERVE</p>

        <h1 className="text-4xl font-bold mb-3 text-black">Our Menu</h1>

        <p className="text-gray-600">
          Every dish crafted with locally sourced ingredients and served with
          love.
        </p>
      </div>
      <div className="sticky top-12 z-40 bg-slate-200 py-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* ALL CATEGORY */}

          <button
            onClick={() => {
              setSelectedCategory(null);
              setPage(1);
            }}
            className={`px-5 py-2 rounded-full border transition duration-200 cursor-pointer font-medium
    ${
      selectedCategory === null
        ? "bg-amber-700 text-white border-black"
        : "bg-white text-black border-gray-300 hover:border-amber-500 hover:text-amber-500"
    }`}
          >
            All
          </button>

          {/* OTHER CATEGORIES */}

          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setPage(1);
              }}
              className={`px-5 py-2 rounded-full border transition duration-200 cursor-pointer font-extralight
      ${
        selectedCategory === cat.id
          ? "bg-amber-700 text-white border-black"
          : "bg-white text-black border-gray-300 hover:border-amber-500 hover:text-amber-500"
      }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* MENU GRID */}

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            {item.imageUrl && (
              <div className="overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover transition duration-500 hover:scale-110"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm mb-3">{item.description}</p>

              <p className="font-bold text-lg mb-4 text-amber-600">
                ₹{item.price}
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-4 py-2 border rounded-full hover:bg-gray-100 cursor-pointer text-white bg-amber-700 font-semibold"
                >
                  View
                </button>

                {/* <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer">
                  Order Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}

      <div className="flex justify-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="px-4 py-2 font-semibold text-black">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-black text-white rounded disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {/* MENU DETAILS MODAL */}

      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-1  right-1 text-gray-500 cursor-pointer text-2xl"
            >
              ✕
            </button>

            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.name}
              className="w-full h-60 object-cover rounded mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-black">
              {selectedItem.name}
            </h2>

            <p className="text-gray-600 mb-3">{selectedItem.description}</p>

            <p className="text-xl font-bold text-amber-600 mb-4">
              ₹{selectedItem.price}
            </p>

            <button className="w-full bg-amber-700 text-white py-2 rounded cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
