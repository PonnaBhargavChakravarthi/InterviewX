export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">
        📌 Recent Activity
      </h2>

      <div className="space-y-4">

        <div className="border-l-4 border-green-500 pl-4">
          <p className="font-semibold">
            Resume Uploaded
          </p>
          <p className="text-gray-500 text-sm">
            Today
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-semibold">
            Mock Interview Completed
          </p>
          <p className="text-gray-500 text-sm">
            Yesterday
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <p className="font-semibold">
            ATS Score Improved
          </p>
          <p className="text-gray-500 text-sm">
            Last Week
          </p>
        </div>

      </div>
    </div>
  );
}