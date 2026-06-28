"use client";

import type { Dispatch, SetStateAction } from "react";
import type { ResumeType } from "@/types/resume";

type Props = {
  resumeType: ResumeType;
  setResumeType: Dispatch<SetStateAction<ResumeType>>;
};

export default function ResumeTypeSelector({
  resumeType,
  setResumeType,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        📋 Resume Type
      </h2>

      <div className="flex gap-10">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="it"
            checked={resumeType === "it"}
            onChange={(e) =>
              setResumeType(e.target.value as ResumeType)
            }
          />
          IT Resume
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="non-it"
            checked={resumeType === "non-it"}
            onChange={(e) =>
              setResumeType(e.target.value as ResumeType)
            }
          />
          Non-IT Resume
        </label>
      </div>
    </div>
  );
}