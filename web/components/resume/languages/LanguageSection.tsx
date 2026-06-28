"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import LanguageCard from "./LanguageCard";

export default function LanguageSection() {
  const [languages, setLanguages] = useState([1]);

  const addLanguage = () => {
    setLanguages([...languages, languages.length + 1]);
  };

  const deleteLanguage = (index: number) => {
    setLanguages(
      languages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🌍 Languages
      </h2>

      <div className="space-y-6">

        {languages.map((_, index) => (
          <LanguageCard
            key={index}
            index={index}
            onDelete={() => deleteLanguage(index)}
          />
        ))}

      </div>

      <Button
        onClick={addLanguage}
        className="mt-6"
      >
        ➕ Add Language
      </Button>

    </div>
  );
}