"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  index: number;
  onDelete: () => void;
};

export default function ExperienceCard({
  index,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-semibold">
          💼 Experience {index + 1}
        </h3>

        <button
          type="button"
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          🗑 Delete
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>Company Name</Label>
          <Input placeholder="Google" />
        </div>

        <div>
          <Label>Job Title</Label>
          <Input placeholder="Software Engineer" />
        </div>

        <div>
          <Label>Location</Label>
          <Input placeholder="Hyderabad" />
        </div>

        <div>
          <Label>Employment Type</Label>
          <Input placeholder="Full Time" />
        </div>

        <div>
          <Label>Start Date</Label>
          <Input type="month" />
        </div>

        <div>
          <Label>End Date</Label>
          <Input type="month" />
        </div>

      </div>

      <div className="mt-5">
        <Label>Job Description</Label>

        <Textarea
          placeholder="Describe your responsibilities..."
          rows={5}
        />
      </div>

    </div>
  );
}