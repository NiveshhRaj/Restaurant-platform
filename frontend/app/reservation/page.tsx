"use client";

import { useState } from "react";
import api from "../../lib/api";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: 1,
    date: "",
    message: "",
  });

  const submit = async () => {
  try {

    const payload = {
      ...form,
      date: new Date(form.date).toISOString()
    };

    console.log(payload);

    await api.post("/reservations", payload);

    alert("Reservation successful!");

  } catch (err) {
    console.error(err);
    alert("Reservation failed");
  }
};

  return (
    <div className="max-w-xl mx-auto py-20 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Table Reservation
      </h1>

      <div className="space-y-4">
        <input
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          type="number"
          placeholder="Guests"
          className="w-full border p-3 rounded"
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
        />
        <input
          type="datetime-local"
          required
          className="w-full border p-3 rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button
          onClick={submit}
          className="bg-amber-500 font-medium text-md text-white w-full py-3 rounded hover:bg-gray-800"
        >
          Book Table
        </button>
      </div>
    </div>
  );
}
