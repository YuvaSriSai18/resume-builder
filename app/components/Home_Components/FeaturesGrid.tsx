// components/FeaturesGrid.tsx
import { ShieldCheck, Download, UserCheck, FileText } from 'lucide-react';

const features = [
  {
    title: 'ATS Optimized',
    description: 'Your resume is formatted to pass through applicant tracking systems with ease.',
    icon: <ShieldCheck size={36} className="text-blue-600 mb-4" />,
  },
  {
    title: 'Instant PDF Download',
    description: 'One-click A4-sized PDF download of your resume, no formatting hassle.',
    icon: <Download size={36} className="text-green-500 mb-4" />,
  },
  {
    title: 'Secure Access',
    description: 'User login ensures your data is safely stored and editable later.',
    icon: <UserCheck size={36} className="text-purple-600 mb-4" />,
  },
  {
    title: 'Minimal & Clean Design',
    description: 'Focus on the content — a professional, no-clutter resume layout.',
    icon: <FileText size={36} className="text-yellow-500 mb-4" />,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-5/6 mt-6 rounded-2xl px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Use Our Resume Builder?</h2>
        <p className="text-gray-600 text-lg mb-12">Tailored to get your resume through the filters and in front of recruiters.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-200"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
