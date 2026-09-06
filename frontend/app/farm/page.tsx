export default function FarmPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-green-700">Add Farm</h1>
        <input type="text" placeholder="Farm Name" className="w-full border rounded-lg p-2" />
        <input type="text" placeholder="Location" className="w-full border rounded-lg p-2" />
        <input type="text" placeholder="Crop Name" className="w-full border rounded-lg p-2" />
        <input type="date" className="w-full border rounded-lg p-2" />
        <input type="number" placeholder="Farm Area (acres)" className="w-full border rounded-lg p-2" />
        <button type="button" className="w-full bg-green-600 text-white py-2 rounded-lg">
          Save Farm
        </button>
      </form>
    </div>
  );
}