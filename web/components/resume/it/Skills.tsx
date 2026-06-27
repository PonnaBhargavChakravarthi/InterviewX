"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Skills() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">💻 Skills</h2>

      <div className="space-y-5">
        <div>
          <Label>Programming Languages</Label>
          <Input placeholder="Example: Java, Python, C++" />
        </div>
      </div>
    </div>
  );
}