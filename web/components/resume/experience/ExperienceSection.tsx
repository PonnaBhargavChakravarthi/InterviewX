"use client";

import { Button } from "@/components/ui/button";
import ExperienceCard from "./ExperienceCard";
import { useResume } from "@/context/ResumeContext";

export default function ExperienceSection() {
  const { resume, setResume } = useResume();

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          company: "",
          jobTitle: "",
          location: "",
          employmentType: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updated = resume.experience.filter((_, i) => i !== index);

    setResume({
      ...resume,
      experience: updated,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        💼 Experience
      </h2>

      <div className="space-y-6">
        {resume.experience.map((experience, index) => (
          <ExperienceCard
            key={index}
            index={index}
            experience={experience}
            onDelete={() => removeExperience(index)}
            canDelete={resume.experience.length > 1}
            onChange={(updatedExperience) => {
              const updated = [...resume.experience];
              updated[index] = updatedExperience;

              setResume({
                ...resume,
                experience: updated,
              });
            }}
          />
        ))}
      </div>

      <Button
        onClick={addExperience}
        className="mt-6"
      >
        ➕ Add Experience
      </Button>
    </div>
  );
}