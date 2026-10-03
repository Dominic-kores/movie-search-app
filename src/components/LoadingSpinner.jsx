// src/components/LoadingSpinner.jsx

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500"></div>

      <p className="mt-4 text-slate-300">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;