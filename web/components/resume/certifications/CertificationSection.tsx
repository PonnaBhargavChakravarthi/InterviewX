"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import CertificationCard from "./CertificationCard";

export default function CertificationSection() {
  const [certifications, setCertifications] = useState([1]);

  const addCertification = () => {
    setCertifications([
      ...certifications,
      certifications.length + 1,
    ]);
  };

  const deleteCertification = (index: number) => {
    setCertifications(
      certifications.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        📜 Certifications
      </h2>

      <div className="space-y-6">

        {certifications.map((_, index) => (
          <CertificationCard
            key={index}
            index={index}
            onDelete={() => deleteCertification(index)}
          />
        ))}

      </div>

      <Button
        onClick={addCertification}
        className="mt-6"
      >
        ➕ Add Certification
      </Button>

    </div>
  );
}