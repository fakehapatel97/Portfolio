import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'IELTS Tutor & Communication Coach',
      company: 'Kanan.co',
      period: 'Jan 2022 – Aug 2024',
      achievements: [
        'Conducted sessions improving communication and content delivery.',
        'Built interactive materials enhancing engagement.',
        'Strengthened audience relationships with tailored strategies.',
        'Delivered impactful presentations to enhance storytelling.',
      ],
    },
    {
      title: 'Assistant English Teacher',
      company: 'St. Francis School',
      period: 'Jan 2017 – Dec 2022',
      achievements: [
        'Designed engaging lessons and adapted messaging for diverse audiences.',
        'Led extracurricular programs improving event coordination and engagement.',
        'Applied creative storytelling and visual content in teaching.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-l-2xl"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
