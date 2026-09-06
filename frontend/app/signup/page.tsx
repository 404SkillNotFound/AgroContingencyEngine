export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-green-700">Farmer Signup</h1>
        <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-2" />
        <input type="email" placeholder="Email" className="w-full border rounded-lg p-2" />
        <input type="password" placeholder="Password" className="w-full border rounded-lg p-2" />
        <button type="button" className="w-full bg-green-600 text-white py-2 rounded-lg">
          Sign Up
        </button>
        <p className="text-sm text-gray-500 text-center">
          Already have an account? <a href="/login" className="text-green-700 underline">Login</a>
        </p>
      </form>
    </div>
  );
}