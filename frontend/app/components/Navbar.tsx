import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="m-10">
        <h1 className="text-7xl text-center font-bold text-accent">
          Graze & Grain
        </h1>
        <p className="text-lg text-center">Farm to Table</p>
      </div>
      <div className="flex justify-center px-8 py -4 bg-amber-500 text-white sticky top-0 z-50">
        <div className="flex gap-6 text-lg p-3 font-medium">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About Us</Link>
          <Link href="/reservation">Reservation</Link>
          <Link href="/admin/login">Admin</Link>
        </div>
      </div>
    </>
  );
}
