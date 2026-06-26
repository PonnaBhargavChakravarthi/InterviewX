"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalInfo() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        👤 Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>Full Name</Label>
          <Input placeholder="Enter your full name" />
        </div>

        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <Label>Phone</Label>
          <Input placeholder="Enter phone number" />
        </div>

        <div>
          <Label>LinkedIn</Label>
          <Input placeholder="LinkedIn Profile URL" />
        </div>

        <div>
          <Label>GitHub</Label>
          <Input placeholder="GitHub Profile URL" />
        </div>

        <div>
          <Label>Location</Label>
          <Input placeholder="City, State" />
        </div>

      </div>

    </div>
  );
}