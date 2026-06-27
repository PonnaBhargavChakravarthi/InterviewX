"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import EducationCard from "./EducationCard";

export default function EducationSection() {

  const [educations, setEducations] = useState([1]);

  const addEducation = () => {
    setEducations([...educations, educations.length + 1]);
  };
const removeEducation = (index: number) => {
  setEducations(
    educations.filter((_, i) => i !== index)
  );
};
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🎓 Education
      </h2>

      <div className="space-y-6">

        {educations.map((_, index) => (
          <EducationCard
  key={index}
  index={index}
  onDelete={() => removeEducation(index)}
  canDelete={educations.length > 1}
/>
        ))}

      </div>

      <Button
        onClick={addEducation}
        className="mt-6"
      >
        ➕ Add Education
      </Button>

    </div>
  );
}