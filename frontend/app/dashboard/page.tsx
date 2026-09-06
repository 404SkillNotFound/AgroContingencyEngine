export default function DashboardPage() {
  const cards = [
    { title: "Farm Location", value: "Bhopal, MP" },
    { title: "Current Crop", value: "Soybean" },
    { title: "Sowing Date", value: "12 June 2026" },
    { title: "Stress Level", value: "N/A" },
    { title: "Weather", value: "N/A" },
    { title: "Recommendation", value: "N/A" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Farmer Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <div key={c.title} className="bg-white rounded-xl shadow p-5">
            <h2 className="text-sm text-gray-500">{c.title}</h2>
            <p className="text-lg font-semibold text-gray-800">{c.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}