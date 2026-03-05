"use client";

import { useEffect, useState } from "react";
import api from "../../../lib/api";

export default function ReservationsTable() {

  const [reservations,setReservations] = useState<any[]>([]);

  const loadReservations = async () => {

    try {

      const res = await api.get("/reservations");
      setReservations(res.data);

    } catch(err){
      console.error("Failed to load reservations",err);
    }

  };

  const updateStatus = async (id:number,status:string) => {

    try{

      await api.patch(`/reservations/${id}/${status}`);

      loadReservations();

    }catch(err){
      console.error("Update failed",err);
    }

  };

  useEffect(()=>{
    loadReservations();
  },[]);

  return (

    <div className="bg-white shadow rounded-lg overflow-hidden">

      <table className="w-full text-black">

        <thead className="bg-gray-100">

          <tr className="text-center text-sm">

            <th className="p-4">Name</th>
            <th>Phone</th>
            <th>Guests</th>
            <th>Date</th>
            <th>Status</th>
            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {reservations.map((r)=>(
            <tr key={r.id} className="border-t text-center">

              <td className="p-4">{r.name}</td>
              <td>{r.phone}</td>
              <td>{r.guests}</td>
              <td>{new Date(r.date).toLocaleString()}</td>

              <td>
                <span className={`px-3 py-1 rounded text-sm cursor-pointer
                  ${r.status==="approved"?"bg-green-100 text-green-700":
                  r.status==="rejected"?"bg-red-100 text-red-700":
                  "bg-yellow-100 text-yellow-700"}
                `}>
                  {r.status}
                </span>
              </td>

              <td className="space-x-2 text-center">

                <button
                  onClick={()=>updateStatus(r.id,"approved")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                >
                  Approve
                </button>

                <button
                  onClick={()=>updateStatus(r.id,"rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                >
                  Reject
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}