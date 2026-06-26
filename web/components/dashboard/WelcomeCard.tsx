"use client";

import { useAuth } from "@/context/AuthContext";

export default function WelcomeCard() {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-3xl font-bold">
        👋 Welcome Back
      </h2>

      <p className="text-gray-600 mt-2">
        Ready for today's interview practice?
      </p>

      <div className="mt-6 space-y-2">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          {user?.email}
        </p>

        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className="text-green-600">
            Logged In ✅
          </span>
        </p>
      </div>
    </div>
  );
}