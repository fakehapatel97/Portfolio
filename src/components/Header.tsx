import { Download, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-500/10 to-pink-500/10"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Digital Marketing Expert</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Fakeha Patel
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4 animate-slide-up animation-delay-200">
          Digital Marketing & Brand Strategy Expert
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Transforming ideas into engaging digital experiences.
        </p>

        {/* Download Resume Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
          <a
            href="/Portfolio/resume.pdf"  // ✅ Include GitHub Pages repo name
            download
            target="_blank"               // Fallback if download attribute is ignored
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* CTA Text */}
        <p className="text-gray-500 mt-8 text-sm animate-fade-in animation-delay-800">
          Let's connect to create something impactful.
        </p>
      </div>
    </section>
  );
};

export default Header;
