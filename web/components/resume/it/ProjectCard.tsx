"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  index: number;
  onDelete: () => void;
};

export default function ProjectCard({
  index,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-semibold">
          🚀 Project {index + 1}
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
          <Label>Project Name</Label>
          <Input placeholder="InterviewX" />
        </div>

        <div>
          <Label>Technology Stack</Label>
          <Input placeholder="Next.js, Firebase, Tailwind CSS" />
        </div>

        <div>
          <Label>GitHub Link</Label>
          <Input placeholder="https://github.com/username/project" />
        </div>

        <div>
          <Label>Live Demo</Label>
          <Input placeholder="https://yourproject.vercel.app" />
        </div>

      </div>

      <div className="mt-5">

        <Label>Project Description</Label>

        <Textarea
          rows={5}
          placeholder="Describe your project..."
        />

      </div>

    </div>
  );
}