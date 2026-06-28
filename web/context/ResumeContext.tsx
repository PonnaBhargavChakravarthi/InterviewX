"use client";

import { createContext, useContext, useState } from "react";

export type Education = {
  qualification: string;
  college: string;
  university: string;
  branch: string;
  startYear: string;
  endYear: string;
  cgpa: string;
  status: string;
};

export type Experience = {
  company: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;

  education: Education[];
  experience: Experience[];
};

type ResumeContextType = {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [resume, setResume] = useState<ResumeData>({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    location: "",

    education: [
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

    experience: [
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

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error("useResume must be used inside ResumeProvider");
  }

  return context;
}