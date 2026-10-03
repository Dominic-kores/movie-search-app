// src/components/ErrorMessage.jsx

const ErrorMessage = ({ message }) => {
  return (
    <div className="mx-auto my-8 max-w-2xl rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-center text-red-300">
      {message}
    </div>
  );
};

export default ErrorMessage;