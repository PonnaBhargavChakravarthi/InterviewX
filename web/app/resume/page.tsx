"use client";

import { useState } from "react";

import PersonalInfo from "@/components/resume/PersonalInfo";
import ResumeTypeSelector from "@/components/resume/ResumeTypeSelector";

import EducationSection from "@/components/resume/education/EducationSection";
import ExperienceSection from "@/components/resume/experience/ExperienceSection";

import Skills from "@/components/resume/it/Skills";
import Projects from "@/components/resume/it/Projects";

import NonITSkills from "@/components/resume/non-it/Skills";

import type { ResumeType } from "@/types/resume";
import CertificationSection from "@/components/resume/certifications/CertificationSection";

export default function ResumePage() {
  const [resumeType, setResumeType] = useState<ResumeType>("it");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          📄 Resume Builder
        </h1>

        <p className="text-gray-600">
          Build your professional resume
        </p>

        <ResumeTypeSelector
          resumeType={resumeType}
          setResumeType={setResumeType}
        />

        <PersonalInfo />

        <EducationSection />

        <ExperienceSection />

        {resumeType === "it" ? (
          <>
            <Skills />
            <Projects />
          </>
        ) : (
          <>
            <NonITSkills />
          </>
        )}

        <CertificationSection />

      </div>
    </main>
  );
}