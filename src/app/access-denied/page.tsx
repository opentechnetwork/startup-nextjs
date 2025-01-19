export default function AccessDeniedPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="text-lg mb-6 max-w-lg leading-relaxed">
        We are sorry, but access to this content is restricted in your country.
      </p>
    </div>
  );
}
