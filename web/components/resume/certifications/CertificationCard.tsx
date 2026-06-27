"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  index: number;
  onDelete: () => void;
};

export default function CertificationCard({
  index,
  onDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-semibold">
          📜 Certification {index + 1}
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
          <Label>Certificate Name</Label>
          <Input placeholder="AWS Cloud Practitioner" />
        </div>

        <div>
          <Label>Issued By</Label>
          <Input placeholder="Amazon Web Services" />
        </div>

        <div>
          <Label>Issue Date</Label>
          <Input type="month" />
        </div>

        <div>
          <Label>Certificate URL</Label>
          <Input placeholder="https://..." />
        </div>

      </div>

    </div>
  );
}