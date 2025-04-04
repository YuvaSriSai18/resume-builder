import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 w-full h-26">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            © 2025 ATS Resume Builder. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm justify-center md:justify-start">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Right side: Developer Info */}
        <div className="text-center">
          <p className="text-sm text-gray-300">
            Developed with 💻 by{" "}
            <Link
              href="https://yuvasrisai18.web.app"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yuva Sri Sai
            </Link>
          </p>
          <div className="flex gap-3 justify-center mt-1">
            <Link
              href="https://www.linkedin.com/in/yuvasrisai18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/yuvasrisai18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </Link>
            <Link
              href="mailto:yuvasanakaranagasrisai_thota@srmap.edu.in"
              className="text-gray-400 hover:text-white transition"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
