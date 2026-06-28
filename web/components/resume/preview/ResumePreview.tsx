"use client";

import { useResume } from "@/context/ResumeContext";

export default function ResumePreview() {
  const { resume } = useResume();

  return (
    <div className="bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        📄 Resume Preview
      </h2>

      <div className="space-y-4">
        {/* Personal Information */}

        <h1 className="text-3xl font-bold">
          {resume.fullName || "Your Name"}
        </h1>

        <p>{resume.email || "email@example.com"}</p>

        <p>{resume.phone || "+91 9876543210"}</p>

        <p>{resume.location || "City, State"}</p>

        <p>{resume.linkedin || "LinkedIn"}</p>

        <p>{resume.github || "GitHub"}</p>

        <hr />

        {/* Education */}

        <h3 className="text-xl font-semibold">
          Education
        </h3>

        {resume.education.length > 0 &&
        resume.education.some(
          (edu) =>
            edu.qualification ||
            edu.college ||
            edu.university ||
            edu.branch
        ) ? (
          <div className="space-y-4">
            {resume.education.map((edu, index) => (
              <div
                key={index}
                className="border-b pb-3"
              >
                <p className="font-bold">
                  {edu.qualification}
                </p>

                <p>{edu.college}</p>

                <p>{edu.university}</p>

                <p>{edu.branch}</p>

                <p>
                  {edu.startYear} - {edu.endYear}
                </p>

                <p>{edu.cgpa}</p>

                <p>{edu.status}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No education added</p>
        )}

        <hr />

        {/* Experience */}

        <h3 className="text-xl font-semibold">
  Experience
</h3>

{resume.experience.length > 0 &&
resume.experience.some(
  (exp) => exp.company || exp.jobTitle
) ? (
  <div className="space-y-4">
    {resume.experience.map((exp, index) => (
      <div
        key={index}
        className="border-b pb-3"
      >
        <p className="font-bold">
          {exp.jobTitle}
        </p>

        <p>{exp.company}</p>

        <p>{exp.location}</p>

        <p>{exp.employmentType}</p>

        <p>
          {exp.startDate} - {exp.endDate}
        </p>

        <p>{exp.description}</p>
      </div>
    ))}
  </div>
) : (
  <p>No experience added</p>
)}

        <hr />

        {/* Skills */}

        <h3 className="text-xl font-semibold">
          Skills
        </h3>

        <p>No skills added</p>

        <hr />

        {/* Projects */}

        <h3 className="text-xl font-semibold">
          Projects
        </h3>

        <p>No projects added</p>
      </div>
    </div>
  );
}