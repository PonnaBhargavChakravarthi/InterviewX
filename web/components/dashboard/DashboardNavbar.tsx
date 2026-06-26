"use client";

import LogoutButton from "./LogoutButton";

export default function DashboardNavbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          InterviewX 🚀
        </h1>

        {/* Logout */}
        <LogoutButton />

      </div>
    </nav>
  );
}