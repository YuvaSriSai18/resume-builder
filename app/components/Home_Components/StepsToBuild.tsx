// components/StepsToBuild.tsx
import { PencilLine, Info, Star, Download } from "lucide-react";

const steps = [
  {
    icon: <Info size={32} className="text-blue-600" />,
    title: "1. Enter Your Details",
    description:
      "Fill out your personal, educational, and professional information.",
  },
  {
    icon: <PencilLine size={32} className="text-green-500" />,
    title: "2. Choose a Template",
    description:
      "Pick from ATS-friendly layouts with clean and modern designs.",
  },
  {
    icon: <Star size={32} className="text-yellow-500" />,
    title: "3. Preview & Edit",
    description: "Make live edits and preview your resume as you go.",
  },
  {
    icon: <Download size={32} className="text-purple-600" />,
    title: "4. Download PDF",
    description:
      "Export your resume in a printable A4 PDF format with one click.",
  },
];

export default function StepsToBuild() {
  return (
    <section className="bg-gradient-to-b from-[#f5f7fa] to-[#e2e8f0] w-5/6 mt-6 mb-12 rounded-2xl py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Steps to Build Your Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 text-center"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
