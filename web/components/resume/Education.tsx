"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Education() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🎓 Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>School / College / University Name</Label>
          <Input placeholder="Example: JNTU Hyderabad" />
        </div>

        <div>
          <Label>Degree / Qualification</Label>
          <Input placeholder="Example: B.Tech, MBA, B.Com, Intermediate" />
        </div>

        <div>
          <Label>Branch / Stream</Label>
          <Input placeholder="Example: Computer Science" />
        </div>

        <div>
          <Label>Board / University</Label>
          <Input placeholder="Example: JNTUH, CBSE, State Board" />
        </div>

        <div>
          <Label>College Location</Label>
          <Input placeholder="Example: Hyderabad" />
        </div>

        <div>
          <Label>Passing Year</Label>
          <Input placeholder="Example: 2026" />
        </div>

        <div>
          <Label>Start Year</Label>
          <Input placeholder="Example: 2022" />
        </div>

        <div>
          <Label>End Year</Label>
          <Input placeholder="Example: 2026" />
        </div>

        <div>
          <Label>CGPA / Percentage</Label>
          <Input placeholder="Example: 8.75 CGPA / 86%" />
        </div>

        <div>
          <Label>Current Status</Label>
          <Input placeholder="Pursuing / Completed" />
        </div>

        <div className="md:col-span-2">
          <Label>Achievements / Academic Highlights</Label>
          <Input placeholder="Example: Gold Medalist, Top 5%, Scholarship" />
        </div>

      </div>

    </div>
  );
}