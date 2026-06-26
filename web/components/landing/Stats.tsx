export default function Stats() {
  const stats = [
    { number: "50K+", label: "Students" },
    { number: "10K+", label: "Interviews" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9★", label: "User Rating" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Trusted by Thousands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}