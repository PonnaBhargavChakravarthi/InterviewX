"use client";

import { Button } from "@/components/ui/button";
import EducationCard from "./EducationCard";

import { useResume } from "@/context/ResumeContext";

export default function EducationSection() {
  const { resume, setResume } = useResume();

  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          qualification: "",
          college: "",
          university: "",
          branch: "",
          startYear: "",
          endYear: "",
          cgpa: "",
          status: "",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    const updated = resume.education.filter((_, i) => i !== index);

    setResume({
      ...resume,
      education: updated,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        🎓 Education
      </h2>

      <div className="space-y-6">
        {resume.education.map((education, index) => (
          <EducationCard
            key={index}
            index={index}
            education={education}
            onChange={(updatedEducation) => {
              const updated = [...resume.education];
              updated[index] = updatedEducation;

              setResume({
                ...resume,
                education: updated,
              });
            }}
            onDelete={() => removeEducation(index)}
            canDelete={resume.education.length > 1}
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