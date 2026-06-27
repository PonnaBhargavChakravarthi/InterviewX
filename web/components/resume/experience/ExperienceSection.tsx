"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {

  const [experiences, setExperiences] = useState([1]);

  const addExperience = () => {
    setExperiences([...experiences, experiences.length + 1]);
  };

  const deleteExperience = (index: number) => {
    setExperiences(
      experiences.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        💼 Experience
      </h2>

      <div className="space-y-6">

        {experiences.map((_, index) => (
          <ExperienceCard
            key={index}
            index={index}
            onDelete={() => deleteExperience(index)}
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