"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");

    if (!auth) {
      router.push("/admin/login");
    }
  }, []);

  redirect("/admin/reservations");

  return <div></div>;
}
