"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  index: number;
  onDelete: () => void;
};

export default function LanguageCard({
  index,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-semibold">
          🌍 Language {index + 1}
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
          <Label>Language</Label>
          <Input placeholder="English" />
        </div>

        <div>
          <Label>Proficiency</Label>
          <Input placeholder="Read, Write, Speak" />
        </div>

      </div>

    </div>
  );
}