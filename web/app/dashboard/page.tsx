import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import DashboardGrid from "@/components/dashboard/DashboardGrid";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <WelcomeCard />
        <DashboardGrid />
        <RecentActivity />
      </div>
    </main>
  );
}