"use client";

import { useState } from "react";
import api from "../../..//lib/api";

export default function AddDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/menu-items", {
        name,
        description,
        price: Number(price),
        imageUrl,
        categoryId: 1,
      });

      alert("Dish added successfully");

      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
    } catch (err) {
      console.error("Add dish failed", err);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow rounded-lg p-6 w-[500px] text-black mx-auto"
    >
      <input
        placeholder="Dish Name"
        className="border w-full p-3 mb-4 rounded text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        className="border w-full p-3 mb-4 rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border w-full p-3 mb-4 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        placeholder="Image URL"
        className="border w-full p-3 mb-6 rounded"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Add Dish
        </button>
      </div>
    </form>
  );
}
