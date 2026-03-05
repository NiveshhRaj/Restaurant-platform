"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* BRAND */}

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Graze & Grain
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            A modern farm-to-table restaurant offering fresh ingredients,
            authentic flavors, and a warm dining experience.
          </p>
        </div>


        {/* QUICK LINKS */}

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/" className="hover:text-amber-500">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-amber-500">
                About
              </Link>
            </li>

          </ul>
        </div>


        {/* CONTACT */}

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <ul className="text-sm space-y-2 text-gray-400">

            <li>📍 Coimbatore, Tamil Nadu</li>

            <li>📞 +91 98765 43210</li>

            <li>📧 contact@grazegrain.com</li>

          </ul>
        </div>


        {/* OPENING HOURS */}

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Opening Hours
          </h3>

          <ul className="text-sm space-y-2 text-gray-400">

            <li>Mon - Fri : 10:00 AM - 10:00 PM</li>

            <li>Saturday : 11:00 AM - 11:00 PM</li>

            <li>Sunday : 11:00 AM - 9:00 PM</li>

          </ul>
        </div>

      </div>


      {/* SOCIAL + COPYRIGHT */}

      <div className="border-t border-gray-800 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Graze & Grain. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <a href="#" className="hover:text-amber-500">
              Instagram
            </a>

            <a href="#" className="hover:text-amber-500">
              Facebook
            </a>

            <a href="#" className="hover:text-amber-500">
              Twitter
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}