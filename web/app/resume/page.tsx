"use client";

import { useState } from "react";

import type { ResumeType } from "@/types/resume";

import PersonalInfo from "@/components/resume/PersonalInfo";
import ResumeTypeSelector from "@/components/resume/ResumeTypeSelector";

import EducationSection from "@/components/resume/education/EducationSection";
import ExperienceSection from "@/components/resume/experience/ExperienceSection";

import Skills from "@/components/resume/it/Skills";
import Projects from "@/components/resume/it/Projects";

import NonITSkills from "@/components/resume/non-it/Skills";

import CertificationSection from "@/components/resume/certifications/CertificationSection";
import LanguageSection from "@/components/resume/languages/LanguageSection";

import ResumePreview from "@/components/resume/preview/ResumePreview";

export default function ResumePage() {
  const [resumeType, setResumeType] = useState<ResumeType>("it");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ================= Left Side ================= */}

        <div className="space-y-6">

          <h1 className="text-4xl font-bold">
            📄 Resume Builder
          </h1>

          <p className="text-gray-600">
            Build your professional resume with InterviewX
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

          <LanguageSection />

        </div>

        {/* ================= Right Side ================= */}

        <div className="sticky top-6 h-fit">
          <ResumePreview />
        </div>

      </div>
    </main>
  );
}