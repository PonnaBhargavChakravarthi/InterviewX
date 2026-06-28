"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Experience } from "@/context/ResumeContext";

type Props = {
  index: number;
  experience: Experience;
  onChange: (experience: Experience) => void;
  onDelete: () => void;
  canDelete: boolean;
};

export default function ExperienceCard({
  index,
  experience,
  onChange,
  onDelete,
  canDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          💼 Experience {index + 1}
        </h3>

        {canDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="text-red-600 hover:text-red-800"
          >
            🗑 Delete
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label>Company Name</Label>
          <Input
            placeholder="Google"
            value={experience.company}
            onChange={(e) =>
              onChange({
                ...experience,
                company: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Job Title</Label>
          <Input
            placeholder="Software Engineer"
            value={experience.jobTitle}
            onChange={(e) =>
              onChange({
                ...experience,
                jobTitle: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Location</Label>
          <Input
            placeholder="Hyderabad"
            value={experience.location}
            onChange={(e) =>
              onChange({
                ...experience,
                location: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Employment Type</Label>
          <Input
            placeholder="Full Time"
            value={experience.employmentType}
            onChange={(e) =>
              onChange({
                ...experience,
                employmentType: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Start Date</Label>
          <Input
            type="month"
            value={experience.startDate}
            onChange={(e) =>
              onChange({
                ...experience,
                startDate: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>End Date</Label>
          <Input
            type="month"
            value={experience.endDate}
            onChange={(e) =>
              onChange({
                ...experience,
                endDate: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="mt-5">
        <Label>Job Description</Label>

        <Textarea
          rows={5}
          placeholder="Describe your responsibilities..."
          value={experience.description}
          onChange={(e) =>
            onChange({
              ...experience,
              description: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}