"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([1]);

  const addProject = () => {
    setProjects([...projects, projects.length + 1]);
  };

  const deleteProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🚀 Projects
      </h2>

      <div className="space-y-6">
        {projects.map((_, index) => (
          <ProjectCard
            key={index}
            index={index}
            onDelete={() => deleteProject(index)}
          />
        ))}
      </div>

      <Button
        onClick={addProject}
        className="mt-6"
      >
        ➕ Add Project
      </Button>

    </div>
  );
}