import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'M.S. in Digital Marketing and Media',
      institution: 'Yeshiva University',
      location: 'New York',
      period: 'Expected May 2026',
      color: 'from-blue-500 to-purple-500',
    },
    {
      degree: 'BBA',
      institution: 'Shree G.K. & C.K. Bosamia College',
      location: 'Gujarat',
      period: 'December 2019',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${edu.color} rounded-l-2xl`}></div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${edu.color} h-fit group-hover:scale-110 transition-transform`}>
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">{edu.institution}</p>

                  <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
