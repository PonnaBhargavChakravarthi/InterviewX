"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResume } from "@/context/ResumeContext";

export default function PersonalInfo() {
  const { resume, setResume } = useResume();

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        👤 Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <Label>Full Name</Label>
          <Input
            placeholder="Enter your full name"
            value={resume.fullName}
            onChange={(e) =>
              setResume({
                ...resume,
                fullName: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={resume.email}
            onChange={(e) =>
              setResume({
                ...resume,
                email: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Phone</Label>
          <Input
            placeholder="Enter phone number"
            value={resume.phone}
            onChange={(e) =>
              setResume({
                ...resume,
                phone: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>LinkedIn</Label>
          <Input
            placeholder="LinkedIn Profile URL"
            value={resume.linkedin}
            onChange={(e) =>
              setResume({
                ...resume,
                linkedin: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>GitHub</Label>
          <Input
            placeholder="GitHub Profile URL"
            value={resume.github}
            onChange={(e) =>
              setResume({
                ...resume,
                github: e.target.value,
              })
            }
          />
        </div>

        <div>
          <Label>Location</Label>
          <Input
            placeholder="City, State"
            value={resume.location}
            onChange={(e) =>
              setResume({
                ...resume,
                location: e.target.value,
              })
            }
          />
        </div>

      </div>
    </div>
  );
}