"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // hide sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}

      <aside className="w-64 bg-black text-white p-6">

        <h2 className="text-2xl font-bold mb-10">
          Admin Panel
        </h2>

        <nav className="space-y-4">

          <Link
            href="/admin/reservations"
            className="block hover:text-amber-400"
          >
            Reservations
          </Link>

          <Link
            href="/admin/adddish"
            className="block hover:text-amber-400"
          >
            Add Dish
          </Link>

          <button
            onClick={()=>{
              localStorage.removeItem("adminAuth");
              window.location.href="/admin/login";
            }}
            className="block text-left text-red-400 hover:text-red-500 cursor-pointer"
          >
            Logout
          </button>

        </nav>

      </aside>

      {/* Content */}

      <main className="flex-1 bg-gray-100 p-10">
        {children}
      </main>

    </div>
  );
}