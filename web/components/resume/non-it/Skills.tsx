"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NonITSkills() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🧰 Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>Technical Skills</Label>
          <Input placeholder="MS Office, Tally, Typing..." />
        </div>

        <div>
          <Label>Communication Skills</Label>
          <Input placeholder="English, Telugu, Hindi..." />
        </div>

        <div>
          <Label>Soft Skills</Label>
          <Input placeholder="Leadership, Teamwork..." />
        </div>

        <div>
          <Label>Computer Skills</Label>
          <Input placeholder="Excel, Word, PowerPoint..." />
        </div>

      </div>

    </div>
  );
}