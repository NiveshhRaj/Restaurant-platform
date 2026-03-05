"use client";

import Link from "next/link";
import Image2 from "../public/assets/img2.webp";
import Image3 from "../public/assets/img3.webp";
import Image4 from "../public/assets/img4.webp";
import Image5 from "../public/assets/img5.webp";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}

      <section className="relative min-h-screen  text-white">
        <img
          src={Image2.src}
          alt="Graze & Grain"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 top-35 text-center px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-gveret-levin">Graze & Grain</h1>

          <p className="text-lg text-center md:text-xl mb-6">
            Where locally sourced ingredients meet culinary artistry. Every dish tells the story of our land.
          </p>

          <Link
            href="/menu"
            className="bg-red-500 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            Menu
          </Link>
        </div>
      </section>

      <section>
        <img
          src={Image3.src}
          alt="Graze & Grain"
          className="w-full h-full object-cover"
        />
      </section>
      <section>
        <img
          src={Image4.src}
          alt="Graze & Grain"
          className="w-full h-full object-cover"
        />
      </section>
      <section>
        <img
          src={Image5.src}
          alt="Graze & Grain"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
}
