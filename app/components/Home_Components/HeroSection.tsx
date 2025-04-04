import React from "react";
import ResumeLottie from "./ResumeLottie";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="w-5/6 mt-6">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            ATS-Friendly <span className="text-blue-600">Resume Builder</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Build clean, professional resumes that pass Applicant Tracking
            Systems – all in one click!
          </p>
          <button className="self-center mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer">
            <Link href={'/create'}>Create Resume</Link>
          </button>
        </div>
        <ResumeLottie />
      </div>
    </div>
  );
};

export default HeroSection;
