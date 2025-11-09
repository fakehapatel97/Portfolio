const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/photo.jpeg" // ✅ path from public folder
                  alt="Fakeha Patel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate and results-driven marketing professional with expertise in{' '}
              <span className="font-semibold text-blue-600">digital storytelling</span>,{' '}
              <span className="font-semibold text-blue-600">consumer engagement</span>, and{' '}
              <span className="font-semibold text-blue-600">brand strategy</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Skilled in leveraging data-driven insights to craft impactful campaigns that drive
              growth and enhance customer experience.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
