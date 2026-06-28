"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Education } from "@/context/ResumeContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  index: number;
  education: Education;
  onChange: (education: Education) => void;
  onDelete: () => void;
  canDelete: boolean;
};

export default function EducationCard({
  index,
  education,
  onChange,
  onDelete,
  canDelete,
}: Props) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          🎓 Education {index + 1}
        </h3>

        {canDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="text-red-600 hover:text-red-800 font-medium"
          >
            🗑 Delete
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>Qualification</Label>

          <Select
            value={education.qualification}
            onValueChange={(value) =>
              onChange({
                ...education,
                qualification: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Qualification" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ssc">SSC / 10th</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="diploma">Diploma</SelectItem>
              <SelectItem value="graduation">Graduation</SelectItem>
              <SelectItem value="postgraduation">
                Post Graduation
              </SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
              <SelectItem value="certification">
                Certification
              </SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>School / College</Label>

          <Input
            placeholder="Institution Name"
            value={education.college}
            onChange={(e) =>
              onChange({
                ...education,
                college: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Board / University</Label>

          <Input
            placeholder="JNTUH / CBSE / State Board"
            value={education.university}
            onChange={(e) =>
              onChange({
                ...education,
                university: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Branch</Label>

          <Input
            placeholder="Computer Science"
            value={education.branch}
            onChange={(e) =>
              onChange({
                ...education,
                branch: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Start Year</Label>

          <Input
            placeholder="2022"
            value={education.startYear}
            onChange={(e) =>
              onChange({
                ...education,
                startYear: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>End Year</Label>

          <Input
            placeholder="2026"
            value={education.endYear}
            onChange={(e) =>
              onChange({
                ...education,
                endYear: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>CGPA / Percentage</Label>

          <Input
            placeholder="8.5 CGPA / 92%"
            value={education.cgpa}
            onChange={(e) =>
              onChange({
                ...education,
                cgpa: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Status</Label>

          <Input
            placeholder="Completed / Pursuing"
            value={education.status}
            onChange={(e) =>
              onChange({
                ...education,
                status: e.target.value,
              })
            }
          />
        </div>

      </div>
    </div>
  );
}