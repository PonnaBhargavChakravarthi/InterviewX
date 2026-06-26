import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center text-center px-6">
      <span className="rounded-full border px-4 py-2 text-sm font-medium">
        🚀 AI Powered Interview Preparation Platform
      </span>

      <h1 className="mt-6 max-w-4xl text-6xl font-extrabold leading-tight">
        Crack Your Dream Job with
        <span className="text-blue-600"> AI Mock Interviews</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Practice HR, Technical, Coding and Aptitude interviews with AI.
        Get instant feedback, ATS resume analysis and improve your hiring score.
      </p>

      <div className="mt-8 flex gap-4">
        <Button size="lg">Start Interview</Button>
        <Button variant="outline" size="lg">
          Watch Demo
        </Button>
      </div>
    </section>
  );
}