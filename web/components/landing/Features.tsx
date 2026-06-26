import { Card } from "@/components/ui/card";

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Everything You Need to Get Hired
        </h2>

        <p className="text-center text-gray-600 mt-4">
          One platform for Resume, Mock Interviews, Coding and Aptitude.
        </p>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          <Card className="p-6">
            <h3 className="text-xl font-bold">🤖 AI Interviews</h3>
            <p className="mt-3 text-gray-600">
              Practice HR and Technical interviews with AI.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold">📄 Resume Builder</h3>
            <p className="mt-3 text-gray-600">
              Create ATS-friendly resumes in minutes.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold">💻 Coding Practice</h3>
            <p className="mt-3 text-gray-600">
              Solve coding problems with AI feedback.
            </p>
          </Card>

        </div>

      </div>
    </section>
  );
}