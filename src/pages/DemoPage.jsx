import React from "react";
import { Link } from "react-router-dom";

const DemoPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Course Demo</h1>
      <div className="w-full max-w-4xl aspect-video mb-6">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <Link
        to="/"
        className="text-indigo-700 hover:underline font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default DemoPage;
