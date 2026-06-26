"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
    >
      Logout
    </button>
  );
}