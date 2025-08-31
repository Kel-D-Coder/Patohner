import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Success 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your action was completed successfully. You can now continue using the app.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
