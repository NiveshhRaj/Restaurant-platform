"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ReservationsTable from "../components/ReservationsTable";

export default function ReservationsPage(){

  const router = useRouter();

  useEffect(()=>{

    const auth = localStorage.getItem("adminAuth");

    if(!auth){
      router.push("/admin/login");
    }

  },[]);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8 text-black text-center">
        Reservations
      </h1>

      <ReservationsTable/>

    </div>

  );

}