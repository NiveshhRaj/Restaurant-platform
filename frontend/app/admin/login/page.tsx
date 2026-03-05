"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = (e:any) => {

    e.preventDefault();

    if(email === "admin@grazegrain.com" && password === "admin123"){

      localStorage.setItem("adminAuth","true");

      router.push("/admin/dashboard");

    } else {
      alert("Invalid credentials");
    }

  };

  return(

    <div className="min-h-screen flex items-center justify-center bg-slate-900">

      <form
        onSubmit={login}
        className="bg-white p-10 rounded-xl shadow-xl w-96"
      >

        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          className="border w-full p-3 mb-4 rounded text-black"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mb-6 rounded text-black text-black"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-amber-500 text-white w-full py-3 rounded"
        >
          Login
        </button>

      </form>

    </div>

  );

}