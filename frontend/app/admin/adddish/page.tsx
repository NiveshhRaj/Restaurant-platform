"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddDish from "../components/AddDish";

export default function AddDishPage(){

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
        Add Dish
      </h1>

      <AddDish/>

    </div>

  );

}