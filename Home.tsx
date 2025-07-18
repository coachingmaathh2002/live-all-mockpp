import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0e1525] text-white flex flex-col justify-center items-center text-center p-6">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-8 h-8 text-indigo-400" />
        <h1 className="text-3xl font-bold">Math Live Mock Test</h1>
      </div>
      <p className="max-w-md mb-6 text-gray-300">
        Transform math question papers into interactive mock tests instantly.
        Upload an image of your questions, and let AI do the rest.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/admin')}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          I'm a Teacher
        </button>
        <button
          onClick={() => navigate('/student')}
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          I'm a Student
        </button>
      </div>
    </div>
  );
};

export default Home;
