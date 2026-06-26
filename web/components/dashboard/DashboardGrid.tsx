import FeatureCard from "./FeatureCard";

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <FeatureCard
        emoji="🎤"
        title="Mock Interview"
        description="Practice HR interviews with AI."
      />

      <FeatureCard
        emoji="📄"
        title="Resume Analyzer"
        description="Analyze and improve your resume."
      />

      <FeatureCard
        emoji="💻"
        title="Coding Round"
        description="Solve coding challenges."
      />

      <FeatureCard
        emoji="🧠"
        title="Aptitude Test"
        description="Practice aptitude questions."
      />

      <FeatureCard
        emoji="📊"
        title="Analytics"
        description="Track your interview progress."
      />

      <FeatureCard
        emoji="⚙️"
        title="Settings"
        description="Manage your account settings."
      />

    </div>
  );
}