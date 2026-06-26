import PersonalInfo from "@/components/resume/PersonalInfo";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          📄 Resume Builder
        </h1>

        <p className="text-gray-600">
          Build your professional resume with InterviewX.
        </p>

        <PersonalInfo />

      </div>

    </main>
  );
}